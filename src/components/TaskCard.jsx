import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateToDoList } from '../state-slices/todoListSlice'

const TaskCard = ({ task }) => {

    
    const dispatch = useDispatch()

    const [toggleDone, setToggleDone] = useState(false)

    const handleToggleDone = () => {
        setToggleDone(!toggleDone)
    }

    const handleDeleteCard = () =>{
        dispatch(updateToDoList(task.id))
    }
    
    const handleUpdateCard = () =>{
        console.log("hello");
    }

    return (
        <div className='TODO-card'>
            <div style={{display:'flex', justifyContent:'space-between'}} onClick={handleToggleDone}>
                <h3 className='prevent-select' style={toggleDone?{textDecoration: 'line-through'}:{textDecoration: 'none'}} >{task.taskname}</h3>
            </div>
            <div className='TODO-buttons'>

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