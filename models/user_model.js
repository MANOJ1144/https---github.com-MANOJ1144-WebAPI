const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }}]
});

// a pre-save hook to hash the user's password before saving:
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});

// Method to get an authentication token
userSchema.methods.generateAuthToken = function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'your-secret-key');
  user.tokens = user.tokens.concat({ token });
  return token;
};


const User = mongoose.model('User', userSchema);

module.exports = User;
