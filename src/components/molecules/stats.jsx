import { Flex, Text } from '@chakra-ui/react'

function Stats({ label, number, ...props }) {
  return (
    <Flex
      flexFlow="column wrap"
      placeContent="center"
      alignItems="center"
      bg="white"
      h={150}
      w={350}
      borderRadius="md"
      {...props}
    >
      <Text fontSize="xl">{label}</Text>
      <Text fontSize="6xl" fontWeight="bold">
        {number}
      </Text>
    </Flex>
  )
}

export default Stats
