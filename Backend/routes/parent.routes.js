const express = require("express");
const Parent = require("../models/Parent");

const router = express.Router();

// Parent registration route
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
      return res
        .status(400)
        .json({
          success: false,
          message: "Parent with this email already exists",
        });
    }

    const parent = new Parent({ firstName, lastName, email, mobileNumber });
    await parent.save();

    res
      .status(201)
      .json({
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
    res
      .status(500)
      .json({
        success: false,
        message: "Parent registration failed",
        error: error.message,
      });
  }
});

// Test endpoint
router.get("/test", (req, res) => {
  res.json({ message: "Auth routes are working" });
});

module.exports = router;
