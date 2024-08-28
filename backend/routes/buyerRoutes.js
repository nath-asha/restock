const express = require('express');
const buyerController = require('../controllers/buyerController');
const router = express.Router();

// Register a new buyer
router.post('/register', buyerController.registerBuyer);

// Get all buyers
router.get('/', buyerController.getAllBuyers);

// Get a buyer by ID
router.get('/:id', buyerController.getBuyerById);

module.exports = router;
