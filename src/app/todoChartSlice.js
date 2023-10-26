import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const todoChartAdapter = createEntityAdapter({
  selectId: (todo) => todo.month,
})

const items = [
  {
    month: 'January',
    tasks: 0,
  },
  {
    month: 'February',
    tasks: 0,
  },
  {
    month: 'March',
    tasks: 0,
  },
  {
    month: 'April',
    tasks: 0,
  },
  {
    month: 'May',
    tasks: 0,
  },
  {
    month: 'June',
    tasks: 0,
  },
  {
    month: 'July',
    tasks: 0,
  },
  {
    month: 'August',
    tasks: 0,
  },
  {
    month: 'September',
    tasks: 0,
  },
  {
    month: 'October',
    tasks: 0,
  },
  {
    month: 'November',
    tasks: 0,
  },
  {
    month: 'December',
    tasks: 0,
  },
]
const filledData = todoChartAdapter.setMany(
  todoChartAdapter.getInitialState(),
  items,
)

const todoChartSlice = createSlice({
  name: 'todoChart',
  initialState: filledData,
  reducers: {
    todoChartUpdate: todoChartAdapter.updateOne,
  },
})

export const { todoChartUpdate } = todoChartSlice.actions

export const todoChartSelectors = todoChartAdapter.getSelectors(
  (state) => state.todoChart,
)

export default todoChartSlice.reducer
