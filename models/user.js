// user.js (Model)
const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
});

// Create User model
const User = mongoose.model('User', userSchema);

// Export User model
module.exports = User;
