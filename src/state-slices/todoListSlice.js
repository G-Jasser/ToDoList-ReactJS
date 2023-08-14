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
        state.tasklist.push(card)
    },
  },
})

export const { addCard } = todoListSlice.actions

export default todoListSlice.reducer