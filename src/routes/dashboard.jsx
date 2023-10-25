import { Container, Text } from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'

function Dashboard() {
  const { project } = useLoaderData()

  return (
    <Container
      h="full"
      display="flex"
      flexFlow="row wrap"
      placeContent="center"
    >
      <Text color="white">Dashboard {project?.name ?? ''}</Text>
    </Container>
  )
}

export default Dashboard
