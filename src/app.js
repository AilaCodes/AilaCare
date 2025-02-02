// filepath: /AilaCareApp/backend/src/routes/healthRoutes.js
const express = require('express');
const healthController = require('../controllers/healthController');

const router = express.Router();

router.get('/conditions', healthController.getConditions);
router.post('/track', healthController.trackHealth);

module.exports = router;