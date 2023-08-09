import React from 'react'

const TaskAdder = () => {
  return (
    <div className='TODO-adder'>
        <label htmlFor='task-adder'>ToDo:</label>
        <input type="text" name="task-adder" id="task-adder" />
        <button onClick={"TODO: ADD TO LIST"}></button>
    </div>
  )
}

export default TaskAdder