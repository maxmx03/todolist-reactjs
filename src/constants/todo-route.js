import { nanoid } from '@reduxjs/toolkit'
import { projectsSelectors } from '../app/projectSlicer'
import { store } from '../app/store'
import { todoAdd, todoRemove, todoSelectors } from '../app/todoSlicer'
import Todo from '../routes/todo'
import { toTitleCase } from '../utils/toTitleCase'
import { redirect } from 'react-router-dom'

class TodoRoute {
  static Element = Todo
  static path = '/todo'
  static getTodoPath = '/:projectId/todo'
  static deleteTodoPath = '/:projectId/todo/delete'

  static loader({ params }) {
    const state = store.getState()
    const project = projectsSelectors.selectById(state, params.projectId)
    const todos = todoSelectors.selectAll(state)

    return { project, todos }
  }

  static async todoAddAction({ request, params }) {
    const formData = await request.formData()
    const todo = formData.get('todo')

    store.dispatch(
      todoAdd({
        name: toTitleCase(todo),
        projectId: params.projectId,
        id: nanoid(),
      }),
    )

    return null
  }

  static async todoDeleteAction({ request, params }) {
    const formData = await request.formData()
    const todoId = formData.get('todoId')
    const projectId = params.projectId

    store.dispatch(todoRemove(todoId))

    return redirect(`/${projectId}/todo`)
  }
}

export default TodoRoute
