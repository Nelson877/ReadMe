const mongoose = require('mongoose');

const kidsSchema = new mongoose.Schema({
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
  school: {
    type: String,
    required: [true, 'School name is required'],
    trim: true
  },
  grade: {
    type: String,
    required: [true, 'Grade is required'],
    trim: true
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    enum: ['male', 'female', 'other']
  },
  kidId: {
    type: String,
    unique: true,
    default: function() {
      return `KID-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add pre-save middleware for additional validation if needed
kidsSchema.pre('save', function(next) {
  console.log('Pre-save middleware running');
  next();
});

// Virtual property for full name
kidsSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

const Kids = mongoose.model('Kids', kidsSchema);

module.exports = Kids;