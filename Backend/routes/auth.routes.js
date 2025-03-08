const express = require("express");
const router = express.Router();
const LibraryUser = require("../models/libraryUser.model");
const Parent = require("../models/Parent");

// Middleware to validate library ID format
const validateLibraryId = (req, res, next) => {
  const { libraryId } = req.body;

  if (!libraryId?.trim()) {
    return res.status(400).json({
      success: false,
      message: "Library ID is required",
    });
  }

  // Validate library ID format (XX-XXXXXXXXXX)
  const libraryIdRegex = /^[A-Z]{2}-\d{10}$/;
  if (!libraryIdRegex.test(libraryId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid library ID format",
    });
  }

  next();
};

router.post("/library-start-reading", validateLibraryId, async (req, res) => {
  try {
    const { libraryId } = req.body;

    // Find user by library ID
    const user = await LibraryUser.findOne({ libraryId });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Library ID not found",
      });
    }

    // For now, just return success. You can add JWT token later if needed
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        libraryId: user.libraryId,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    console.error("Error in library-start-reading:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while verifying library ID",
    });
  }
});

// Add parent registration route
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber } = req.body;

    if (!firstName || !lastName || !email || !mobileNumber) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const existingParent = await Parent.findOne({ email });
    if (existingParent) {
      return res.status(400).json({
        success: false,
        message: "Parent with this email already exists",
      });
    }

    const parent = new Parent({ firstName, lastName, email, mobileNumber });
    await parent.save();

    res.status(201).json({
      success: true,
      message: "Parent registration successful",
      parent: {
        id: parent._id,
        firstName: parent.firstName,
        lastName: parent.lastName,
        email: parent.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Parent registration failed",
      error: error.message,
    });
  }
});


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
module.exports = router;
