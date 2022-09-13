const router = require('express').Router()
const Locations = require('../models/Locations')
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        let Locations = await Locations.find()
        res.send(Locations)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to retreive locations' })
    }
})

router.post('/', async (req, res) => {
    const Locations = new Locations({
        name: req.body.name,
        locations: req.body.locations 
    })
    try {
        const newLocations = await myLocations.save() 
        res.status(201).json(newLocation)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({ 'message': 'unable to save location' })
    }
})

module.exports = router