const express = require('express');
const router = express.Router();
const LibraryUser = require('../models/libraryUser.model');

// Register new library ID
router.post('/library-get-id', async (req, res) => {
  try {
    let { libraryId, fullName, phoneNumber } = req.body;

    // Validate input
    if (!libraryId || !fullName || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Trim input
    libraryId = libraryId.trim();
    fullName = fullName.trim();
    phoneNumber = phoneNumber.trim();

    // Check if library ID already exists
    const existingUser = await LibraryUser.findOne({ libraryId });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Library ID already exists'
      });
    }

    // Create new library user
    const newUser = new LibraryUser({ libraryId, fullName, phoneNumber });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'Library ID registered successfully',
      data: { libraryId }
    });
  } catch (error) {
    console.error('Error in library-get-id:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Verify library ID for reading access
router.post('/library-start-reading', async (req, res) => {
  try {
    let { libraryId } = req.body;

    if (!libraryId) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a library ID'
      });
    }

    // Trim input
    libraryId = libraryId.trim();

    const user = await LibraryUser.findOne({ libraryId });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Library ID not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Library ID verified successfully',
      data: { 
        libraryId: user.libraryId,
        fullName: user.fullName,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Error in library-start-reading:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
