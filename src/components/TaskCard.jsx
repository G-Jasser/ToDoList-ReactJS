import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTaskName, deleteTask, toggleTaskDone } from '../state-slices/todoListSlice'

const TaskCard = ({ task }) => {

    const dispatch = useDispatch()

    const handleToggleDoneClick = () => {
        dispatch(toggleTaskDone(task.id))
    }

    const handleDeleteTaskClick = () =>{
        dispatch(deleteTask(task.id))
    }

    const [toUpdate, setToUpdate] = useState(false)
    const [updateName, setUpdateName] = useState(task.taskname)

    const handleToUpdateCardClick = () => {
        setToUpdate(true)
    }
    const handleUpdatedNameChange = (input) => {
        setUpdateName(input.target.value)
    }

    const handleAcceptUpdateClick = () => {
        const payload = {"taskname":updateName, "id":task.id}
        dispatch(updateTaskName(payload))
        setToUpdate(false)
    }
    
    const handleCancelUpdateClick = () => {
        setUpdateName(task.taskname)
        setToUpdate(false)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAcceptUpdateClick()
        }
    }

    return (
        <div className='TODO-card'>
            <div style={{display:'flex', justifyContent:'space-between'}} onClick={handleToggleDoneClick}>
                <h3 className='prevent-select' style={task.isDone?{textDecoration: 'line-through'}:{textDecoration: 'none'}} >{task.taskname}</h3>
            </div>
            
            {
                toUpdate?
                <div className='TODO-buttons'>
                    <input type="text" value={updateName} onChange={handleUpdatedNameChange} onKeyDown={handleKeyPress}/>
                    <button onClick={handleAcceptUpdateClick} >Accept</button>
                    <button onClick={handleCancelUpdateClick} >Cancel</button>
                </div>
                :
                <></>
            }
            
            <div className='TODO-buttons'>
                <button onClick={handleToUpdateCardClick}>
                    U
                </button>
                <button onClick={handleDeleteTaskClick}>
                    X
                </button>
            </div>
        </div>
    )
}

export default TaskCard