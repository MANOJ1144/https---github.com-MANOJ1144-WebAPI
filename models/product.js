// product.js (Model)
const mongoose = require('mongoose');

// Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create Product model
const Product = mongoose.model('Product', productSchema);

// Export Product model
module.exports = Product;
