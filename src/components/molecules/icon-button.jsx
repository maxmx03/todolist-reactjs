import { Button, Icon } from '@chakra-ui/react'

function IconButton({ icon, color, fontSize, ...props }) {
  return (
    <Button {...props}>
      <Icon as={icon} color={color} fontSize={fontSize} />
    </Button>
  )
}

export default IconButton
