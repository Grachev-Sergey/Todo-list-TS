import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './taskSlice'

export const store = configureStore({
  reducer: {
    todos: tasksReducer,
  }
})

export type StoreType = ReturnType<typeof store.getState>