const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    instruments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'location'
        }
    ]
}, {
    timestamps: true,
})

// validate password return error if less than 8 characters
userSchema.pre('save', function(next) {
    const user = this
    return new Promise(async (resolve, reject) => {
        if (user.password.length < 8) {
            let err = new Error("password length needs to be 8 characters")
            reject(err)
        } else {
            user.password = await bcrypt.hash(user.password, 12)
            next()
        }
    })
})

module.exports = mongoose.model('User', userSchema)