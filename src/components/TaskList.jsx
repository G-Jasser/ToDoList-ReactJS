import React, { useState } from 'react'
import TaskAdder from './TaskAdder'
import TaskCard from './TaskCard'

const TaskList = () => {
    const [todoList, setTodoList] = useState([])

    return (
        <div className='TODO-container'>
            <TaskAdder addTask={setTodoList} todoList={todoList} />
            <div className='TODO-card-container'>
                {
                    todoList.map((task) => <TaskCard updateTask={setTodoList} task={task} key={task.id} />)
                }
            </div>
        </div>
    )
}

export default TaskList