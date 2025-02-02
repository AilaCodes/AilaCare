const express = require('express');
const HealthCondition = require('../models/healthModel');

const router = express.Router();

// Get all health conditions
router.get('/conditions', async (req, res) => {
  try {
    const conditions = await HealthCondition.find();
    res.json(conditions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;