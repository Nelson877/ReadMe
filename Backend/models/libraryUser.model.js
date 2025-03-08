const mongoose = require('mongoose');

const libraryUserSchema = new mongoose.Schema({
  libraryId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^[A-Z]{2}-\d{10}$/, 'Invalid library ID format']
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, 'Full name must be at least 2 characters long']
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        // Validate Ghanaian phone number
        const phoneRegex = /^(020|024|050|054|055|059|053)\d{7}$/;
        return phoneRegex.test(v);
      },
      message: props => `${props.value} is not a valid Ghanaian phone number!`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const LibraryUser = mongoose.model('LibraryUser', libraryUserSchema);

module.exports = LibraryUser;