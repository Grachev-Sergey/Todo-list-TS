import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Itasks {
  id: string
  value: string
  complited?: boolean
}

interface IinitialStateType {
  tasks: Itasks[]
  filter: string
}

const initialState: IinitialStateType = {
  tasks: [],
  filter: 'all',
}

type addTaskTextType = {
  todoText: string
} 

type changeTextType = {
  id: string
  value: string
}

export const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<addTaskTextType>) => {
      const newTask: Itasks = {
        id: new Date().toISOString(),
        value: action.payload.todoText,
      }
      state.tasks = [newTask, ...state.tasks]
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(todo => todo.id !== action.payload);
    },
    switchStatus: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.map(todo => {
        if (todo.id !== action.payload) return todo;
        return {
          ...todo,
          complited: !todo.complited,
        };
      });
    },
    changingArrow: (state) => {
      const isEverySelected = state.tasks.every((elem) => elem.complited);
      state.tasks = state.tasks.map(
        todo => {
          return {
            ...todo,
            complited: !isEverySelected,
          };
        }
      );
    },
    leaveActiveTasks: (state) => {
      state.tasks = state.tasks.filter(todo => !todo.complited)
    },
    changeText: (state, action: PayloadAction<changeTextType>) => {
      state.tasks = state.tasks.map(todo => {
        if (todo.id !== action.payload.id) return todo;
        return {
          ...todo,
          value: action.payload.value,
        };
      });
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  }
})

export const {
  addTask,
  deleteTask,
  switchStatus,
  changingArrow,
  leaveActiveTasks,
  changeText,
  changeFilter,
} = tasksSlice.actions

export default tasksSlice.reducer

export type {IinitialStateType, Itasks}
