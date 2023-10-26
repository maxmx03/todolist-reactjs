import { Flex } from '@chakra-ui/react'
import Brand from '../atoms/brand'
import NavLink from '../molecules/nav-link'
import { VscDashboard, VscOutput } from 'react-icons/vsc'
import RootRoute from '../../constants/root-route'
import TodoRoute from '../../constants/todo-route'
import { useParams } from 'react-router-dom'

function SideMenu() {
  const { projectId } = useParams()

  return (
    <Flex
      background="bgdarker"
      flexBasis={200}
      flexGrow={[0, 1, 1, 1, 1, 0]}
      direction="column"
      alignItems="center"
      padding={5}
      gap={10}
    >
      <Brand />
      <NavLink url={TodoRoute.getTodoPath(projectId)} icon={VscOutput} />
      <NavLink url={RootRoute.path} icon={VscDashboard} />
    </Flex>
  )
}

export default SideMenu
