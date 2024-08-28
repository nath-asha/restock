const Buyer = require('../models/Buyer');

// Register a new bulk buyer
exports.registerBuyer = async (req, res) => {
    try {
        const newBuyer = new Buyer(req.body);
        await newBuyer.save();
        res.status(201).json(newBuyer);
    } catch (error) {
        res.status(400).json({ error: 'Failed to register buyer', message: error.message });
    }
};

// Get all buyers
exports.getAllBuyers = async (req, res) => {
    try {
        const buyers = await Buyer.find();
        res.status(200).json(buyers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve buyers', message: error.message });
    }
};

// Get a specific buyer by ID
exports.getBuyerById = async (req, res) => {
    try {
        const buyer = await Buyer.findById(req.params.id);
        if (!buyer) {
            return res.status(404).json({ error: 'Buyer not found' });
        }
        res.status(200).json(buyer);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve buyer', message: error.message });
    }
};
