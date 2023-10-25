import { nanoid } from '@reduxjs/toolkit'
import { projectAdd, projectsSelectors } from '../app/projectSlicer'
import { store } from '../app/store'
import Root from '../routes/root'

class RootRoute {
  static Element = Root
  static path = '/'

  static loader() {
    const projects = projectsSelectors.selectAll(store.getState())

    return { projects }
  }

  static async projectAddAction({ request }) {
    const formData = await request.formData()
    const project = formData.get('project')

    store.dispatch(
      projectAdd({
        id: nanoid(),
        name: project,
      }),
    )

    return null
  }
}

export default RootRoute
