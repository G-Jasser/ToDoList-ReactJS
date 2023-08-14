import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasklist:[],
    globalID:0,
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.globalID += 1
      const card = {
          "taskname": action.payload,
            "id": state.globalID
          }
      state.tasklist.unshift(card)
    },
    deleteTask: (state, action) => {
      state.tasklist = state.tasklist.filter((task) => task.id !== action.payload)
    },
    updateTaskName: (state, action) => {
      state.tasklist.filter((task) => task.id === action.payload.id).forEach((task)=>{
        task.taskname = action.payload.taskname
      })
    }
  },
})

export const { addTask, deleteTask, updateTaskName } = todoListSlice.actions

export default todoListSlice.reducer