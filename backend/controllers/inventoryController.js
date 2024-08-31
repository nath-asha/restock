const Inventory = require('../models/Inventory');

exports.addInventoryItem = async (req, res) => {
    try {
        const newItem = new Inventory(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add inventory item', message: error.message });
    }
};

exports.getAllInventoryItems = async (req, res) => {
    try {
        const items = await Inventory.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve inventory items', message: error.message });
    }
};

exports.getInventoryItemById = async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve inventory item', message: error.message });
    }
};


exports.updateInventoryItem = async (req, res) => {
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update inventory item', message: error.message });
    }
};
