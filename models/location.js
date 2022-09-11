const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
    },
    cityName:{
        type: String,
        required: true,   
    },
    photo:{
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Location', locationSchema)