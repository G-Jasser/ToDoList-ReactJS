import React, { useState } from 'react'
import TaskAdder from './TaskAdder'
import TaskCard from './TaskCard'
import {useSelector } from 'react-redux'

const TaskList = () => {
    const todoList = useSelector((state) => state.todoLister.tasklist)

    return (
        <div className='TODO-container'>
            <TaskAdder />
            {
                todoList.length>0
                ?
                <div className='TODO-card-container'>
                    {
                        todoList.map((task) => <TaskCard task={task} key={task.id} />)
                    }
                </div>
                :
                <h1>
                    ADD TASKS
                </h1>
            }
        </div>
    )
}

export default TaskList