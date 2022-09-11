const router = require('express').Router()
const location = require('../models/location')
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        let locations = await location.find()
        res.send(locations)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to retreive locations' })
    }
})

router.post('/', async (req, res) => {
    try {
        const location = await new location({
            ...req.body
        }).save()
        
        const existingUser = await User.findById(req.body.user)
        existingUser.locations.push(location._id)
        let updatedUser = await User.findByIdAndUpdate(req.body.user, existingUser)

    
        res.send(location)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to save location' })
    }
})

module.exports = router