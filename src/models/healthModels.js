// filepath: /AilaCareApp/backend/src/models/healthModel.js
const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({
  userId: String,
  condition: String,
  date: Date,
  notes: String
});

const Health = mongoose.model('Health', healthSchema);

module.exports = Health;