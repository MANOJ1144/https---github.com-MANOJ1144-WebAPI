// products.js (Routes)
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Define routes
router.get('/', productsController.getProducts);
router.post('/', productsController.createProduct);

// Export router
module.exports = router;
