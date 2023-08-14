import React, { useState } from 'react'

const TaskCard = ({ task }) => {

    const [toggleDone, setToggleDone] = useState(false)

    const handleToggleDone = () => {
        setToggleDone(!toggleDone)
    }

    return (
        <div className='TODO-card' onClick={handleToggleDone}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h3 style={toggleDone?{textDecoration: 'line-through'}:{textDecoration: 'none'}} >{task.taskname}</h3>
            </div>
        </div>
    )
}

export default TaskCard