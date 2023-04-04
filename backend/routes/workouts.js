const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

// GET all Workouts
router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
})

// GET single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single workout'})
})

// POST Workout
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE Workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout'})
})

// UPDATE Workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a workout'})
})

module.exports = router