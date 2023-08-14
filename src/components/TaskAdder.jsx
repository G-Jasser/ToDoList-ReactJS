import React, { useState } from 'react'

const TaskAdder = ({ addTask, todoList }) => {

    const [incrementID, setIncrementID] = useState(0)
    const [taskName, setTaskName] = useState("")

    const handleTaskNameChange = (el) => setTaskName(el.target.value)


    const handleAddTask = () => {
        if(taskName!=="") {
            addTask([{ "id": incrementID, "taskname": taskName }, ...todoList])
            setIncrementID(incrementID + 1)
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