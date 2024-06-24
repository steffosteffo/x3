// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  taken: Number,
});

// Check if the model already exists before defining it
//const User = mongoose.models.User || mongoose.model('User', userSchema);


module.exports = mongoose.model('User', userSchema);
