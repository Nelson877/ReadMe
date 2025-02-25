const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add pre-save middleware for additional validation if needed
parentSchema.pre('save', function(next) {
  console.log('Pre-save middleware running');
  next();
});

const Parent = mongoose.model('Parent', parentSchema);
module.exports = Parent;