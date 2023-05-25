// app.js
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/user_route');
const productsRouter = require('./routes/product_route');

// Set up Express app
const app = express();
app.use(express.json());

// Set up database connection
mongoose.connect('mongodb://localhost: 27017/BackendAPI.API' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });

// Define routes
app.use('/userRoute', usersRouter);
app.use('/product', productsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
