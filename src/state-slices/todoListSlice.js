import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasklist:[],
    globalID:0,
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.globalID += 1
      const card = {
          "taskname": action.payload,
            "id": state.globalID
          }
      state.tasklist.unshift(card)
    },
    updateToDoList: (state, action) => {
      state.tasklist = state.tasklist.filter((task) => task.id !== action.payload)
    }
  },
})

export const { addCard, updateToDoList } = todoListSlice.actions

export default todoListSlice.reducer