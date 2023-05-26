const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const auth = require('../middleware/auth');


// Create a new user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Add a route for user login:
router.post('/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(401).send({ error: 'Invalid email or password' });
  }
});


// Get all users
router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.error('Failed to fetch users:', error);
      res.status(500).json({ message: 'Failed to fetch users' });
    });
});

module.exports = router;
