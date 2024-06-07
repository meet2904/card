const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // Add any other fields you need for your data
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
