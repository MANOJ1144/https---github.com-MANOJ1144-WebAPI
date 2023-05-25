// usersController.js
const User = require('../models/user');

// Controller methods
const getUsers = (req, res) => {
  // Logic to fetch all users from the database
  User.find()
     .then(users => res.json(users))
     . catch(error => res.status(500).json({ error: 'Internal server error' }));
};

const createUser = (req, res) => {
  // Logic to create a new user
  const { name, email } = req.body;
  const newUser = new User({ name, email });

  newUser.save()
    .then(user => res.status(201).json(user))
    .catch(error => res.status(500).json({ error: 'Internal server error' }));
};

// Export controller methods
module.exports = {
  getUsers,
  createUser
};
