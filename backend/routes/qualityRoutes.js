const express = require('express');
const qualityController = require('../controllers/qualityController');
const router = express.Router();

// Perform a quality check on an inventory item
router.post('/check-quality', qualityController.checkQuality);

module.exports = router;
