const express = require('express');
const router = express.Router();
const LibraryUser = require('../models/libraryUser.model');
const { validatePhoneMiddleware } = require('../middleware/phoneValidation');
const { sendSMS } = require('../utils/twilioSMS');

// Middleware to validate library input
const validateLibraryInput = (req, res, next) => {
  const { libraryId, fullName, phoneNumber } = req.body;

  if (!libraryId?.trim() || !fullName?.trim() || !phoneNumber?.trim()) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  // Validate library ID format (XX-XXXXXXXXXX)
  const libraryIdRegex = /^[A-Z]{2}-\d{10}$/;
  if (!libraryIdRegex.test(libraryId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid library ID format',
    });
  }

  next();
};

// Library ID registration route
router.post('/library-get-id', validatePhoneMiddleware, validateLibraryInput, async (req, res) => {
  try {
    const { libraryId, fullName, phoneNumber } = req.body;

    // Check if user already exists
    const existingUser = await LibraryUser.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Phone number already registered.',
      });
    }

    // Create a new library user
    const newLibraryUser = new LibraryUser({
      libraryId,
      fullName,
      phoneNumber: phoneNumber.replace(/\D/g, ''),
    });

    await newLibraryUser.save();

    // Send SMS notification
    const smsResult = await sendSMS(phoneNumber, `Welcome to the library! Your Library ID is ${libraryId}`);

    return res.status(201).json({
      success: true,
      libraryId,
      smsStatus: smsResult.success,
    });
  } catch (error) {
    console.error('Library ID Registration Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

module.exports = router;
