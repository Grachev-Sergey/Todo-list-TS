import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    todos: tasksReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch