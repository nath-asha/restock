const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const router = express.Router();


router.post('/add', inventoryController.addInventoryItem);
router.get('/', inventoryController.getAllInventoryItems);
router.get('/:id', inventoryController.getInventoryItemById);
router.put('/:id', inventoryController.updateInventoryItem);
module.exports = router;
