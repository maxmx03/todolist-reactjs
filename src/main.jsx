import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import theme from './theme.js'
import ErrorPage from './routes/error-page.jsx'
import DashboardRoute from './constants/dashboard-route.js'
import TodoRoute from './constants/todo-route.js'
import RootRoute from './constants/root-route.js'

const router = createBrowserRouter([
  {
    path: RootRoute.path,
    element: <RootRoute.Element />,
    loader: RootRoute.loader,
    action: RootRoute.projectAddAction,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardRoute.Element />,
        loader: DashboardRoute.loader,
      },
      {
        path: '/todolist-reactjs/:projectId',
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
        path: TodoRoute.getTodoPath,
        element: <TodoRoute.Element />,
        loader: TodoRoute.loader,
        action: TodoRoute.todoAddAction,
      },
      {
        path: TodoRoute.deleteTodoPath,
        action: TodoRoute.todoDeleteAction,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
