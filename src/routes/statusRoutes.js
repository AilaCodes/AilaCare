const express = require('express');
const router = express.Router();

// Status endpoint
router.get('/status', (req, res) => {
  res.json({ status: 'Application is running smoothly' });
});

module.exports = router;