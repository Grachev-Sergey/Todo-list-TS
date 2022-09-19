import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

const todos = (state: RootState) => state.todos.tasks;
const status = (state: RootState) => state.todos.filter;

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