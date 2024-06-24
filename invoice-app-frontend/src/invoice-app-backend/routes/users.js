// routes/customers.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = User.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle Fetch (hämta) all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle updating an existing customer
router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, password, taken } = req.body;

  try {
    // Find the customer by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Update user properties
    customer.name = name;
    customer.password = password;
    customer.taken = taken;
   
    

    // Save the updated user
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
