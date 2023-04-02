const express = require('express')
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
router.post('/', (req, res) => {
    res.json({msg: 'POST a new workout'})
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