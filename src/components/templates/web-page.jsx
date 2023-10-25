import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function WebPage({ children }) {
  return (
    <Flex height="full" width="full" flexFlow="row wrap">
      {children}
      <Box background="bg" flex={1}>
        <Outlet />
      </Box>
    </Flex>
  )
}

export default WebPage
