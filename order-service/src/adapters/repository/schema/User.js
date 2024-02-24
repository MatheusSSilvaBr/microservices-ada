const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  email: String,
}, { versionKey: false });

const user = mongoose.model('users', UserSchema);

module.exports = user;