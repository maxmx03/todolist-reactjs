import {
  Button,
  Checkbox,
  Flex,
  Input,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { VscTrash } from 'react-icons/vsc'
import { Form, useLoaderData, useSubmit } from 'react-router-dom'

function Todo() {
  const { project, todos } = useLoaderData()
  const submit = useSubmit()

  const renderList = () => {
    if (!todos) return <></>

    return todos.map((todo) => {
      if (project && project.id && todo.projectId == project.id) {
        return (
          <ListItem key={todo.id} display="flex">
            <Form>
              <Checkbox
                colorScheme="blue"
                color="white"
                size="lg"
                value={todo.checked}
                isChecked={todo.checked}
                onChange={() => {
                  submit(
                    {
                      todoCheckbox: !todo.checked,
                      todoId: todo.id,
                    },
                    { method: 'post', action: 'check' },
                  )
                }}
              >
                <Text fontSize={25}>{todo.name}</Text>
              </Checkbox>
            </Form>
            <Spacer />
            <Form method="delete" action="delete">
              <Button
                color="white"
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
      <UnorderedList
        spacing={30}
        overflowY="auto"
        maxH="xl"
        width="4xl"
        alignSelf="center"
      >
        {renderList()}
      </UnorderedList>
      <Spacer />
      <Form method="post">
        <Stack direction="row">
          <Input
            id="todo-input"
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
