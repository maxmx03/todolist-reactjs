import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './projectSlicer'
import todoReducer from './todoSlicer'

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    todos: todoReducer,
  },
})
