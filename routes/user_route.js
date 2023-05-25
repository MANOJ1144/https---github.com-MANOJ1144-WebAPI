// users.js (Routes)
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController.js');

// Define routes
router.get('/', usersController.getUsers);
router.post('/', usersController.createUser);

// Export router
module.exports = router;
