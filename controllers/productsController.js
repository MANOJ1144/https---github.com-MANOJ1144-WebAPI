// productsController.js
const  Product = require('../models/product');

// Controller methods
const getProducts = (req, res) => {
  // Logic to fetch all products from the database
  Product.find()
    .then(products => res.json(products))
    .catch(error => res.status(500).json({ error: 'Internal server error' }));
};

const createProduct = (req, res) => {
  // Logic to create a new product
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });

  newProduct.save()
    .then(product => res.status(201).json(product))
    .catch(error => res.status(500).json({ error: 'Internal server error' }));
};

// Export controller methods
module.exports = {
  getProducts,
  createProduct
};
