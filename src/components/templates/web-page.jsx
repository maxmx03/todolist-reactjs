import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function WebPage({ children }) {
  return (
    <Flex height="full" width="full" flexDirection={{ base: 'column', lg: 'row' }}>
      {children}
      <Box background="bg" flex={1} flexGrow="1">
        <Outlet />
      </Box>
    </Flex>
  )
}

export default WebPage
