import { Flex } from '@chakra-ui/react'
import Brand from '../atoms/brand'
import NavLink from '../molecules/nav-link'
import { VscDashboard, VscOutput } from 'react-icons/vsc'

function SideMenu() {
  return (
    <Flex
      background="bgdarker"
      flexBasis={200}
      direction="column"
      alignItems="center"
      padding={5}
      gap={10}
    >
      <Brand />
      <NavLink url="/todo" icon={VscOutput} />
      <NavLink url="/" icon={VscDashboard} />
    </Flex>
  )
}

export default SideMenu
