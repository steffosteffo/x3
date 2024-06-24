
// routes/users1.js
const express = require('express');
const router = express.Router();
const Userr = require('../models/Userr');

router.post('/', (req, res) => {
  try {
    const userr = new userr(req.body);
    const savedUserr = userr.save();
    res.json(savedUserr);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle Fetch (hämta) all users
router.get('/', async (req, res) => {
  try {
    const userss = await Userr.find();
    res.json(userss);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to handle updating an existing user
router.put('/:id', async (req, res) => {
  const userrId = req.params.id;
  const { name, password, taken } = req.body;

  try {
    // Find the user by ID
    const userr = await Userr.findById(userrId);

    if (!userr) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user properties
    userr.name = name;
    userr.password = password;
    userr.taken = taken;
   
    
    // Save the updated user
    const updatedUserr = await userr.save();
    res.json(updatedUserr);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
