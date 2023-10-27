import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './projectSlicer'
import todoReducer from './todoSlicer'
import todoChartReducer from './todoChartSlice'
import projectChartReducer from './projectChartSlicer'
import { loadState, saveState } from '../utils/localStorage'
import _ from 'lodash'

const persistedState = loadState()

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    todos: todoReducer,
    todoChart: todoChartReducer,
    projectChart: projectChartReducer,
  },
  preloadedState: persistedState,
})

store.subscribe(
  _.throttle(() => {
    const state = store.getState()

    saveState({
      todos: state.todos,
      projects: state.projects,
      todoChart: state.todoChart,
      projectChart: state.projectChart,
    })
  }, 1000),
)
