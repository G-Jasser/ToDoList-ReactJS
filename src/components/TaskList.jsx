import React, { useState } from 'react'
import TaskAdder from './TaskAdder'
import TaskCard from './TaskCard'
import {useSelector } from 'react-redux'

const TaskList = () => {
    const todoList = useSelector((state) => state.todoLister.tasklist)

    return (
        <div className='TODO-container'>
            <TaskAdder />
            <div className='TODO-card-container'>
                {
                    todoList.map((task) => <TaskCard task={task} key={task.id} />)
                }
            </div>
        </div>
    )
}

export default TaskList