import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../state-slices/todoListSlice'

const TaskAdder = () => {

    const dispatch = useDispatch()

    const [taskName, setTaskName] = useState("")

    const handleTaskNameChange = (input) => setTaskName(input.target.value)


    const handleAddTask = () => {
        if(taskName!=="") {
            dispatch(addTask(taskName))
            setTaskName("")
        }
    }

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask()
        }    
    }

    return (
        <div className='TODO-adder-container'>
            <div className='TODO-adder'>
                <label htmlFor='task-adder'>ToDo:</label>
                <br />
                <input type="text" name="task-adder" id="task-adder" value={taskName}
                onChange={handleTaskNameChange}
                onKeyDown={handleEnterPress}
                />
                <br />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    )
}

export default TaskAdder