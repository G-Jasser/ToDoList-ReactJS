import React, { useState } from 'react'

const TaskCard = ({ task, updateTask}) => {

    const [toggleDone, setToggleDone] = useState(false)

    const handleToggleDone = () => {
        setToggleDone(!toggleDone)
    }

    const handleDeleteCard = () => {
        updateTask(taskList => taskList.filter((item) => item.id !== task.id));
    }

    return (
        <div className='TODO-card' onClick={handleToggleDone}>
            <div>
                <h3 style={toggleDone?{textDecoration: 'line-through'}:{textDecoration: 'none'}}>{task.taskname}</h3>
            </div>
            <div className='TODO-buttons'>
                <button onClick={() => console.log("Hello")}>
                    U
                </button>
                <button onClick={handleDeleteCard}>
                    X
                </button>
            </div>
        </div>
    )
}

export default TaskCard