import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const todoAdapter = createEntityAdapter({
  selectId: (todo) => todo.id,
})

const todoSlice = createSlice({
  name: 'todos',
  initialState: todoAdapter.getInitialState(),
  reducers: {
    todoAdd: todoAdapter.addOne,
    todoUpdate: todoAdapter.updateOne,
    todoRemove: todoAdapter.removeOne,
  },
})

export const { todoAdd, todoUpdate, todoRemove } = todoSlice.actions

export const todoSelectors = todoAdapter.getSelectors((state) => state.todos)

export default todoSlice.reducer
