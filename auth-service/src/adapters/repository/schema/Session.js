const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  email: String,
  password: String
}, { versionKey: false });

const session = mongoose.model('sessions', SessionSchema);

module.exports = session;