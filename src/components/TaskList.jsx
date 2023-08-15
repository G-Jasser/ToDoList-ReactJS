import React, { useState } from 'react'
import TaskAdder from './TaskAdder'
import TaskCard from './TaskCard'
import {useSelector } from 'react-redux'

const TaskList = () => {
    const todoList = useSelector((state) => state.todoLister.tasklist)
    
    const [filterSetting, setFilterSetting] = useState(0);

    const handleChange = (radioInput) => {
    setFilterSetting(+radioInput.currentTarget.value);
    };

    return (
        <div className='TODO-container'>
            <TaskAdder />
            {
                todoList.length>0
                ?
                <>
                <ul className='TODO-filter-container'>
                    <h2>Filter: </h2>
                    <li>
                        <label htmlFor='radio1'>Not Done</label>
                        <input
                            type='radio'
                            id='radio1'
                            value='-1'
                            onChange={handleChange}
                            checked={filterSetting === -1}
                        />
                    </li>
                    <li>
                        <label htmlFor='radio2'>All</label>
                        <input
                            type='radio'
                            id='radio2'
                            value='0'
                            onChange={handleChange}
                            checked={filterSetting === 0}
                        />
                    </li>
                    <li>
                        <label htmlFor='radio3'>Done</label>
                        <input
                            type='radio'
                            id='radio3'
                            value='1'
                            onChange={handleChange}
                            checked={filterSetting === 1}
                        />
                    </li>
                </ul>

                <div className='TODO-card-container'>
                    {
                        filterSetting === 1?
                        todoList.filter((task)=>task.isDone).map((task) => <TaskCard task={task} key={task.id} />)
                        :
                        filterSetting === -1?
                        todoList.filter((task)=>!task.isDone).map((task) => <TaskCard task={task} key={task.id} />)
                        :
                        todoList.map((task) => <TaskCard task={task} key={task.id} />)

                    }
                </div>
                </>
                :
                <h1>
                    ADD TASKS
                </h1>
            }
        </div>
    )
}

export default TaskList