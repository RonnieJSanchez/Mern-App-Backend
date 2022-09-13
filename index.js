require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()
const user = require('./controllers/user')
const Locations = require('./controllers/Locations')

// db connection
/*mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));
*/

// global
app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}))
app.use(express.json());


// middleware
app.get('/', (req, res) => {
    console.log('Home Page')
    res.send('Home Page')
})

app.get('/user', (req, res) => {
    console.log('Users Page')
    res.send('Users Page')
})

app.get('/user/Locations', (req, res) => {
    console.log('Travel Log')
    res.send('Travel log')
})

// routes
app.use('/user', user)
app.use('/Locations', Locations)




const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started ${PORT}`))