const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
    qualityStatus: {
        type: String,
        default: 'Good',
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Inventory', inventorySchema);
