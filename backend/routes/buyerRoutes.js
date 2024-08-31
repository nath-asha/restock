const express = require('express');
const buyerController = require('../controllers/buyerController');
const router = express.Router();

router.post('/register', buyerController.registerBuyer);

router.get('/', buyerController.getAllBuyers);

router.get('/:id', buyerController.getBuyerById);

module.exports = router;
