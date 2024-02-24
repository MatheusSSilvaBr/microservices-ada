const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  id: String,
  user_id: String,
  description: String,
}, { versionKey: false });

const order = mongoose.model('orders', OrderSchema);

module.exports = order;