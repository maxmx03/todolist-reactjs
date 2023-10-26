import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './projectSlicer'
import todoReducer from './todoSlicer'
import todoChartReducer from './todoChartSlice'
import projectChartReducer from './projectChartSlicer'

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    todos: todoReducer,
    todoChart: todoChartReducer,
    projectChart: projectChartReducer,
  },
})
