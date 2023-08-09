import React from 'react'

const TaskCard = () => {
  return (
    <div className='TODO-card' onClick={"TODO: Strikethrough Name"}>
        <h3>TODO NAME</h3>
        <div className='TODO-buttons'>
            <button onClick={"TODO: UPDATE NAME"}>
                U
            </button>
            <button onClick={"TODO: REMOVE TODO ITEM"}>
                X
            </button>
        </div>
    </div>
  )
}

export default TaskCard