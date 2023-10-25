import {
  Button,
  Checkbox,
  Flex,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { VscTrash } from 'react-icons/vsc'
import { Form, useLoaderData } from 'react-router-dom'

function Todo() {
  const { project, todos } = useLoaderData()

  const renderList = () => {
    if (!todos) return <></>

    return todos.map((todo) => {
      if (project && project.id && todo.projectId == project.id) {
        return (
          <ListItem key={todo.id} display="flex" justifyContent="space-around">
            <Checkbox
              colorScheme="blue"
              color="white"
              size="lg"
              flexBasis={450}
            >
              <Text fontSize={25}>{todo.name}</Text>
            </Checkbox>
            <Form method="post" action="delete">
              <Button
                color="red.500"
                variant="unstyled"
                type="submit"
                name="todoId"
                value={todo.id}
              >
                <VscTrash size={30} />
              </Button>
            </Form>
          </ListItem>
        )
      }
    })
  }

  return (
    <Flex height="full" width="full" direction="column" p={3} gap={20}>
      <Text color="white" fontSize="3xl" fontWeight="bold">
        {project?.name ?? 'Select a project'}
      </Text>
      <UnorderedList flex={1} spacing={30} overflowY="auto" maxH="xl">
        {renderList()}
      </UnorderedList>
      <Form method="post">
        <Stack direction="row">
          <Input
            placeholder="Insert a new task"
            name="todo"
            color="white"
            isDisabled={!project}
          />
          <Button type="submit" isDisabled={!project}>
            Insert
          </Button>
        </Stack>
      </Form>
    </Flex>
  )
}

export default Todo
