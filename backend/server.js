require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// Express app
const app = express()

// Middlewares
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// Routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Listening on Port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.error(error)
    })