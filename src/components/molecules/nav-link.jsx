import { Circle, Icon, Link } from '@chakra-ui/react'
import { NavLink as RouterNavLink } from 'react-router-dom'

function NavLink({ url, icon }) {
  return (
    <Link
      to={url}
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
