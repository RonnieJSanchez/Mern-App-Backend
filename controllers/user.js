const router = require('express').Router()
const User = require('../models/user')
const location = require('../models/locations')

router.get('/', async (req, res) => {
    try {
        const users = await User.find().populate('locations')

        res.json(users)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

router.get('/id/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const user = await User.findOne({ _id })

        res.json(user)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

router.get('/username/:username', async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username })

        res.json(user)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOneAndDelete({ _id: id })
        
        res.json(user)
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

router.post('/create', async (req, res) => {
    try {
        const { username, password, age, name } = req.body
        console.log(username, password)
        const createdUser = await new User({
            username,
            password,
            age,
            name
        }).save()

        res.json({ 'message': 'user created' })
    } catch (error) {
        res.status(400).json({ "message": String(error) })
    }
})

router.put('/add/location/:id', async(req, res) => {
    try {
        const { locationId } = req.body
        const { id } = req.params 

        const user = await User.findById(id)
        user.locations.push(locationId)
        let updatedUser = await User.findByIdAndUpdate(id, user)

        res.send(updatedUser)
    } catch (error) {
        res.status(500).json({ 'message': 'unable to add location' })
    }
})

module.exports = router