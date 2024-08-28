const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true,
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Inventory',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    purchaseDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Purchase', purchaseSchema);
