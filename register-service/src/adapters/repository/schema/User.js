const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  cpf: String,
  street: String,
  number: String,
  neighborhood: String,
  city: String,
  state: String,
  country: String,
}, { versionKey: false });

const user = mongoose.model('users', UserSchema);

module.exports = user;