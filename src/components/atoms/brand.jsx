import { Icon } from '@chakra-ui/react'
import { VscRocket } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

function Brand() {
  return (
    <Link to="/todolist-reactjs/">
      <Icon as={VscRocket} fontSize={40} color="white" />
    </Link>
  )
}

export default Brand
