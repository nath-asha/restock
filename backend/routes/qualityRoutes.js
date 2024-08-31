const express = require('express');
const qualityController = require('../controllers/qualityController');
const router = express.Router();

router.post('/check-quality', qualityController.checkQuality);
module.exports = router;
