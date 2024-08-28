const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    preferredSlot: {
        type: String,
        required: true,
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Buyer', buyerSchema);
