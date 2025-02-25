const express = require('express');
const router = express.Router();
const LibraryUser = require('../models/libraryUser.model');

// Middleware to validate input
const validateLibraryInput = (req, res, next) => {
  const { libraryId, fullName, phoneNumber } = req.body;

  if (!libraryId?.trim() || !fullName?.trim() || !phoneNumber?.trim()) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Validate library ID format (XX-XXXXXXXXXX)
  const libraryIdRegex = /^[A-Z]{2}-\d{10}$/;
  if (!libraryIdRegex.test(libraryId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid library ID format'
    });
  }

  // Validate phone number format (XXX-XXX-XXXX)
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid phone number format'
    });
  }

  next();
};

router.post('/library-get-id', validateLibraryInput, async (req, res) => {
  try {
    const { libraryId, fullName, phoneNumber } = req.body;

    // Check if library ID already exists
    const existingUser = await LibraryUser.findOne({ 
      $or: [
        { libraryId },
        { phoneNumber }
      ]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: existingUser.libraryId === libraryId 
          ? 'Library ID already exists' 
          : 'Phone number already registered'
      });
    }

    // Create new user
    const newUser = new LibraryUser({
      libraryId,
      fullName,
      phoneNumber
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: 'Library ID registered successfully',
      data: {
        libraryId: newUser.libraryId,
        fullName: newUser.fullName,
        phoneNumber: newUser.phoneNumber
      }
    });

  } catch (error) {
    console.error('Error in library-get-id:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while registering library ID',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;