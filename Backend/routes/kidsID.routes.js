const express = require("express");
const router = express.Router();
const Kid = require("../models/kids"); // Adjust to your actual model path

// Get reader by ID
router.get("/reader/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ message: "Reader ID is required" });
    }

    const reader = await Kid.findOne({ kidId: id });
    
    if (!reader) {
      return res.status(404).json({ message: "Reader not found with this ID" });
    }

    // Return reader information without sensitive data
    res.status(200).json({ 
      success: true, 
      reader: {
        _id: reader._id,
        kidId: reader.kidId,
        name: reader.name,
        // Add any other fields you want to return
      } 
    });
  } catch (error) {
    console.error("Error finding reader:", error);
    res.status(500).json({ message: "Server error, please try again later" });
  }
});

// Add other routes for kids here

module.exports = router;