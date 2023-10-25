import { Circle, Icon, Link } from '@chakra-ui/react'
import { useParams, NavLink as RouterNavLink } from 'react-router-dom'
import RootRoute from '../../constants/root-route'

function NavLink({ url, icon }) {
  const { projectId } = useParams()

  return (
    <Link
      to={
        projectId
          ? `${RootRoute.path}/${projectId}${url}`
          : `${RootRoute.path}${url}`
      }
      as={RouterNavLink}
    >
      {({ isActive }) => (
        <Circle
          size="40px"
          bg={isActive ? 'bglight' : ''}
          color={isActive ? 'white' : 'grey'}
        >
          <Icon as={icon} fontSize="2xl" />
        </Circle>
      )}
    </Link>
  )
}

export default NavLink
