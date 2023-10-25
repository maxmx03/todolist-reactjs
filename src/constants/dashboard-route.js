import { projectsSelectors } from '../app/projectSlicer'
import { store } from '../app/store'
import Dashboard from '../routes/dashboard'

class DashboardRoute {
  static projectPath = '/todolist-reactjs/:projectId'
  static Element = Dashboard

  static getProjectPath(projectId) {
    return `/todolist-reactjs/${projectId}`
  }

  static loader({ params }) {
    const project = projectsSelectors.selectById(
      store.getState(),
      params.projectId,
    )

    return { project }
  }
}

export default DashboardRoute
