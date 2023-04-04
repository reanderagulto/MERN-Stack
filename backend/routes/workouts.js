const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

// GET all Workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST Workout
router.post('/', createWorkout)

// DELETE Workout
router.delete('/:id', deleteWorkout)

// UPDATE Workout
router.patch('/:id', updateWorkout)

module.exports = router