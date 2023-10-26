import { projectChartSelectors } from '../app/projectChartSlicer'
import { projectsSelectors } from '../app/projectSlicer'
import { store } from '../app/store'
import { todoChartSelectors } from '../app/todoChartSlice'
import { todoSelectors } from '../app/todoSlicer'
import Dashboard from '../routes/dashboard'

class DashboardRoute {
  static Element = Dashboard

  static loader() {
    const state = store.getState()
    const totalProjects = projectsSelectors.selectTotal(state)
    const totalTodo = todoSelectors.selectTotal(state)
    const todoData = todoChartSelectors.selectAll(state)
    const projectData = projectChartSelectors.selectAll(state)

    return { todoData, projectData, totalProjects, totalTodo }
  }
}

export default DashboardRoute
