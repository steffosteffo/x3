// models/Userr.js
const mongoose = require('mongoose');

const userrSchema = new mongoose.Schema({
  name: String,
  password: String,
  taken: Number,
});

module.exports = mongoose.model('Userr', userrSchema);
