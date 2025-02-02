const mongoose = require('mongoose');

const healthConditionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const HealthCondition = mongoose.model('HealthCondition', healthConditionSchema);

module.exports = HealthCondition;