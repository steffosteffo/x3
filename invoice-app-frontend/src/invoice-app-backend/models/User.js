// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  taken: Number,
});

module.exports = mongoose.model('User', userSchema);
