import { nanoid } from '@reduxjs/toolkit'
import { projectsSelectors } from '../app/projectSlicer'
import { store } from '../app/store'
import {
  todoAdd,
  todoUpdate,
  todoRemove,
  todoSelectors,
} from '../app/todoSlicer'
import Todo from '../routes/todo'
import { toTitleCase } from '../utils/toTitleCase'
import { redirect } from 'react-router-dom'

class TodoRoute {
  static Element = Todo
  static path = '/todolist-reactjs/todo'
  static todoPath = '/todolist-reactjs/:projectId/todo'
  static checkTodoPath = '/todolist-reactjs/:projectId/todo/check'
  static deleteTodoPath = '/todolist-reactjs/:projectId/todo/delete'

  static getTodoPath(projectId) {
    return `/todolist-reactjs/${projectId}/todo`
  }

  static getDeleteTodoPath(projectId) {
    return `/todolist-reactjs/${projectId}/todo/delete`
  }

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
        checked: false,
      }),
    )

    return null
  }

  static async checkTodoAction({ request, params }) {
    const formData = await request.formData()
    const checked = formData.get('todoCheckbox')
    const todoId = formData.get('todoId')
    const projectId = params.projectId

    store.dispatch(
      todoUpdate({
        id: todoId,
        changes: {
          checked: checked == 'true',
        },
      }),
    )

    return redirect(`/todolist-reactjs/${projectId}/todo`)
  }

  static async todoDeleteAction({ request, params }) {
    const formData = await request.formData()
    const todoId = formData.get('todoId')
    const projectId = params.projectId

    store.dispatch(todoRemove(todoId))

    return redirect(`/todolist-reactjs/${projectId}/todo`)
  }
}

export default TodoRoute
