const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./controllers/user')
const intrumentRoutes = require('./controllers/myLocations')
require('dotenv').config()

const app = express()

// middleware
app.use(express.json())

// routes
app.use('/user', userRoutes)
app.use('/myLocations', locationRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))