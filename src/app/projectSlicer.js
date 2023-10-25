import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const projectsAdapter = createEntityAdapter({
  selectId: (project) => project.id,
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectsAdapter.getInitialState(),
  reducers: {
    projectAdd: projectsAdapter.addOne,
  },
})

export const { projectAdd } = projectsSlice.actions

export const projectsSelectors = projectsAdapter.getSelectors(
  (state) => state.projects,
)

export default projectsSlice.reducer
