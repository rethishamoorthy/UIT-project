// models/Order.js
// const mongoose = require('mongoose');

// const formSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   user_email: String,
//   user_address: String,
//   product_rate: String,
//   plastic_type: String,
  
// });

// module.exports = mongoose.model('Form', formSchema,'Form');

// Module/Form.js

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Define the schema
const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  user_email: { type: String, required: true },
  user_address: { type: String, required: true },
  product_rate: { type: String, required: true },
  plastic_type: { type: String, required: true },
  plastic_types: { type: [String], required: true },
});

// Create the model
const Order = mongoose.model('Order', orderSchema);

// POST request to save order
router.post('/', async (req, res) => {
  const { name, phone, user_email, user_address, product_rate, plastic_type, plastic_types } = req.body;

  // Create a new order instance
  const newOrder = new Order({
    name,
    phone,
    user_email,
    user_address,
    product_rate,
    plastic_type,
    plastic_types,
  });

  try {
    // Save the order to the database
    await newOrder.save();
    res.status(200).json({ message: 'Order saved successfully!' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error saving order', error: error.message });
  }
});

module.exports = router;
