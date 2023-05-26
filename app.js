const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/user_route');

// Set up Express app
const app = express();
app.use(express.json());
app.use(userRouter);


mongoose.set('strictQuery', false); // Add this line to suppress the deprecation warning

// Set up database connection
mongoose.connect('mongodb://localhost:27017/BackendAPI', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Failed to connect to MongoDB:', error);
});


// Define routes
app.use('/user', usersRouter);
app.use('/product', productsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
