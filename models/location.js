const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['guitar', 'mayonnaise', 'drums', 'bass', 'piano']
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String
    },
    price: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('location', locationSchema)