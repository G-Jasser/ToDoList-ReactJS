import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from '../state-slices/todoListSlice'

const Store = configureStore({
  reducer: {
    todoLister: todoListSlice
  },
})

export default Store