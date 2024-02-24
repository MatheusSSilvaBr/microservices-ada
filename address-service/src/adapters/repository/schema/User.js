const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  street: String,
  neighborhood: String,
  city: String,
  state: String,
}, { versionKey: false });

const user = mongoose.model('users', UserSchema);

module.exports = user;