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

store.subscribe(_.throttle(() => {
  saveState({
    todos: store.getState().todos,
    projects: store.getState().projects,
    todoChart: store.getState().todoChart,
    projectChart: store.getState().projectChart,
  })
}, 1000))
