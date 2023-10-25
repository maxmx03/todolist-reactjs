import { Button, Flex, Text } from '@chakra-ui/react'
import { useNavigate, useRouteError } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()
  const error = useRouteError()

  const goPreviousPage = () => {
    navigate(-1)
  }

  return (
    <Flex
      flexFlow="column wrap"
      placeContent="center"
      alignItems="center"
      height="full"
      width="full"
      background="bg"
    >
      <Text fontSize="8xl" fontWeight="bold" color="white">
        404
      </Text>
      <Button onClick={goPreviousPage}>
        {error.statusText || error.message}
      </Button>
    </Flex>
  )
}

export default ErrorPage
