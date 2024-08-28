const express = require('express');
const inventoryController = require('../controllers/inventoryController');
const router = express.Router();

// Add a new inventory item
router.post('/add', inventoryController.addInventoryItem);

// Get all inventory items
router.get('/', inventoryController.getAllInventoryItems);

// Get an inventory item by ID
router.get('/:id', inventoryController.getInventoryItemById);

// Update an inventory item
router.put('/:id', inventoryController.updateInventoryItem);

module.exports = router;
