import { createSelector } from "@reduxjs/toolkit";
import { IinitialStateType } from './taskSlice';

const todos = (state: IinitialStateType) => state.tasks;
const status = (state: IinitialStateType) => state.filter;

const filteredTodos = createSelector(
  [todos, status],
  (todos, filter) => {
    if (filter === 'all' || filter === '') return todos;
    return todos.filter(i => {
      if (filter === 'complited') {
        return i.complited;
      }
      return !i.complited;
    });
  }
)
export default filteredTodos