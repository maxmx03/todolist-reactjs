import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import RootRoute from '../constants/root-route'
import DashboardRoute from '../constants/dashboard-route'
import TodoRoute from '../constants/todo-route'

export const router = createBrowserRouter([
  {
    path: RootRoute.path,
    element: <RootRoute.Element />,
    loader: RootRoute.loader,
    action: RootRoute.projectAddAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RootRoute.projectDeletePath,
        action: RootRoute.projectDeleteAction,
      },
      {
        index: true,
        element: <DashboardRoute.Element />,
        loader: DashboardRoute.loader,
      },
      {
        path: TodoRoute.path,
        element: <TodoRoute.Element />,
        loader: TodoRoute.loader,
      },
      {
        path: TodoRoute.todoPath,
        element: <TodoRoute.Element />,
        loader: TodoRoute.loader,
        action: TodoRoute.todoAddAction,
      },
      {
        path: TodoRoute.checkTodoPath,
        action: TodoRoute.checkTodoAction,
      },
      {
        path: TodoRoute.deleteTodoPath,
        action: TodoRoute.todoDeleteAction,
      },
    ],
  },
])
