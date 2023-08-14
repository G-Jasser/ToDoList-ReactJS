import React, { useState } from 'react'

const TaskCard = ({ task, updateTask}) => {

    const [toggleDone, setToggleDone] = useState(false)

    const handleToggleDone = () => {
        setToggleDone(!toggleDone)
    }

    const handleDeleteCard = () => {
        updateTask(taskList => taskList.filter((item) => item.id !== task.id));
    }

    const [toUpdate, setToUpdate] = useState(false)
    const [updateName, setUpdateName] = useState(task.taskname)

    const handleUpdateCard = () => {
        setToUpdate(true)
    }

    const handleUpdatedNameChange = (input) => setUpdateName(input.target.value)

    const handleAcceptUpdate = () => {
        task.taskname = updateName
        setToUpdate(false)
    }
    
    const handleCancelUpdate = () => {
        setUpdateName(task.taskname)
        setToUpdate(false)
    }

    

    return (
        <div className='TODO-card' onClick={handleToggleDone}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h3 style={toggleDone?{textDecoration: 'line-through'}:{textDecoration: 'none'}} >{task.taskname}</h3>
                <input type="text" style={toUpdate?{display: 'flex'}:{display: 'none'}} value={updateName} onChange={handleUpdatedNameChange}/>
                <button style={toUpdate?{display: 'flex'}:{display: 'none'}} onClick={handleAcceptUpdate} >Accept</button>
                <button style={toUpdate?{display: 'flex'}:{display: 'none'}} onClick={handleCancelUpdate} >Cancel</button>
            </div>
            <div className='TODO-buttons'>
                <button onClick={handleUpdateCard}>
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