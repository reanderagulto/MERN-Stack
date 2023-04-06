import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const handleSubmit = async (e) => {

        e.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: "POST", 
            body: JSON.stringify(workout), 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json() 

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            resetForm()
            setError(null)
            setMessage("New Workout Added")
            dispatch({type: "CREATE_WORKOUT", payload: json})
        }
        setTimeout(() => {
            setError(null)
            setMessage(null)
        }, 2500)
    }

    const resetForm = () => {
        setTitle('')
        setLoad('')
        setReps('')
    }

    return (
        <form 
            className="create"
            onSubmit={handleSubmit}
        >
            <h3>Add a New Workout</h3>
            <div className="form-control-group">
                <label>Exercise Title: </label>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div className="form-control-group">
                <label>Load (in kg):</label>
                <input 
                    type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                />
            </div>
            <div className="form-control-group">
                <label>Reps:</label>
                <input 
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                />
            </div>

            <button>Add Workout</button>
            {error && 
                <div className="error">{error}</div>
            }
            {message && 
                <div className="message">{message}</div>
            }
        </form>
    )
}

export default WorkoutForm