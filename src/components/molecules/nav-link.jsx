import { Circle, Icon, Link } from '@chakra-ui/react'
import { VscOutput } from 'react-icons/vsc'
import { useParams, NavLink as RouterNavLink } from 'react-router-dom'

function NavLink() {
  const { projectId } = useParams()

  return (
    <Link to={`${projectId ?? ''}/todo`} as={RouterNavLink}>
      {({ isActive }) => (
        <Circle
          size="40px"
          bg={isActive ? 'bglight' : ''}
          color={isActive ? 'white' : 'grey'}
        >
          <Icon as={VscOutput} fontSize="2xl" />
        </Circle>
      )}
    </Link>
  )
}

export default NavLink
