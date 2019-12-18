const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
  username: { type: String, default: null, unique: true },
  password: { type: String, default: null }
});

module.exports = mongoose.model('user', userSchema);
