import { createSelector } from "@reduxjs/toolkit";
import { IinitialStateType } from './taskSlice'

const todos = (state: IinitialStateType) => state.tasks;
const status = (state: IinitialStateType) => state.filter;

const filteredTodos = createSelector(
  [todos, status],
  (todos, filter) => {
    if (filter === 'all') return todos;
    return todos.filter(i => {
      if (filter === 'completed') {
        return i.complited;
      }
      return !i.complited;
    });
  }
)
export default filteredTodos