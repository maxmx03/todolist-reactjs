import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const projectChartAdapter = createEntityAdapter({
  selectId: (project) => project.month,
})

const items = [
  {
    month: 'January',
    projects: 0,
  },
  {
    month: 'February',
    projects: 0,
  },
  {
    month: 'March',
    projects: 0,
  },
  {
    month: 'April',
    projects: 0,
  },
  {
    month: 'May',
    projects: 0,
  },
  {
    month: 'June',
    projects: 0,
  },
  {
    month: 'July',
    projects: 0,
  },
  {
    month: 'August',
    projects: 0,
  },
  {
    month: 'September',
    projects: 0,
  },
  {
    month: 'October',
    projects: 0,
  },
  {
    month: 'November',
    projects: 0,
  },
  {
    month: 'December',
    projects: 0,
  },
]
const filledData = projectChartAdapter.setMany(
  projectChartAdapter.getInitialState(),
  items,
)

const projectChartSlice = createSlice({
  name: 'projectChart',
  initialState: filledData,
  reducers: {
    projectChartUpdate: projectChartAdapter.updateOne,
  },
})

export const { projectChartUpdate } = projectChartSlice.actions

export const projectChartSelectors = projectChartAdapter.getSelectors(
  (state) => state.projectChart,
)

export default projectChartSlice.reducer
