import { nanoid } from '@reduxjs/toolkit'
import {
  projectAdd,
  projectRemove,
  projectsSelectors,
} from '../app/projectSlicer'
import { store } from '../app/store'
import Root from '../routes/root'
import { toTitleCase } from '../utils/toTitleCase'
import { redirect } from 'react-router-dom'
import moment from 'moment/moment'
import {
  projectChartSelectors,
  projectChartUpdate,
} from '../app/projectChartSlicer'

class RootRoute {
  static Element = Root
  static path = '/todolist-reactjs'
  static projectDeletePath = '/todolist-reactjs/project/delete'

  static loader() {
    const projects = projectsSelectors.selectAll(store.getState())

    return { projects }
  }

  static async projectAddAction({ request }) {
    const formData = await request.formData()
    const project = formData.get('project')

    if (project.length === 0) return null

    const createdAt = moment().format('MMMM')

    store.dispatch(
      projectAdd({
        id: nanoid(),
        name: toTitleCase(project),
        createdAt,
      }),
    )

    const projectChart = projectChartSelectors.selectById(
      store.getState(),
      createdAt,
    )

    store.dispatch(
      projectChartUpdate({
        id: projectChart.month,
        changes: {
          projects: projectChart.projects + 1,
        },
      }),
    )

    document.getElementById('project-input').value = ''

    return null
  }

  static async projectDeleteAction({ request }) {
    const formData = await request.formData()
    const projectId = formData.get('delete-project')

    store.dispatch(projectRemove(projectId))

    return redirect(RootRoute.path)
  }
}

export default RootRoute
