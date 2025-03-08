const express = require('express');
const router = express.Router();
const Kids = require('../models/kids');

// Add kids registration route
router.post("/add-new-reader", async (req, res) => {
  try {
    const { firstName, lastName, school, grade, gender } = req.body;
    
    if (!firstName || !lastName || !school || !grade || !gender) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    
    // Create new kid with auto-generated kidId
    const kid = new Kids({ 
      firstName, 
      lastName, 
      school, 
      grade, 
      gender 
    });
    
    await kid.save();
    
    res.status(201).json({
      success: true,
      message: "Reader registration successful",
      reader: {
        kidId: kid.kidId,
        firstName: kid.firstName,
        lastName: kid.lastName,
        school: kid.school,
        grade: kid.grade,
        gender: kid.gender
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Reader registration failed",
      error: error.message,
    });
  }
});

// Get reader by kidId
router.get("/reader/:kidId", async (req, res) => {
  try {
    const kid = await Kids.findOne({ kidId: req.params.kidId });
    
    if (!kid) {
      return res.status(404).json({
        success: false,
        message: "Reader not found with this ID"
      });
    }
    
    res.status(200).json({
      success: true,
      reader: {
        kidId: kid.kidId,
        firstName: kid.firstName,
        lastName: kid.lastName,
        school: kid.school,
        grade: kid.grade,
        gender: kid.gender
      }
    });
  } catch (error) {
    console.error("Error fetching reader:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch reader information",
      error: error.message
    });
  }
});

module.exports = router;