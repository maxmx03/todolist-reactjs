import {
  Box,
  Flex,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Stack,
} from '@chakra-ui/react'
import { VscAdd, VscFile, VscTrash } from 'react-icons/vsc'
import { Form, useLoaderData, NavLink } from 'react-router-dom'
import TodoRoute from '../../constants/todo-route'
import IconButton from '../molecules/icon-button'

function ProjectMenu() {
  const { projects } = useLoaderData()

  return (
    <Flex
      background="bgdark"
      flexBasis={300}
      padding={5}
      flexDirection="column"
      gap={30}
    >
      <Flex flexFlow="row wrap" gap="10" justifyContent="center">
        <Heading color="white">Projects</Heading>
      </Flex>
      <Form method="post">
        <Stack spacing={2} direction="row">
          <Input
            id="project-input"
            variant="flushed"
            placeholder="Insert project name"
            color="white"
            name="project"
          />
          <IconButton
            type="submit"
            variant="unstyled"
            color="white"
            icon={VscAdd}
            fontSize="3xl"
          />
        </Stack>
      </Form>
      <List spacing={3} color="white">
        {projects.map((project) => (
          <ListItem
            key={project.id}
            display="flex"
            flexFlow="row wrap"
            placeContent="space-around"
            alignItems="center"
          >
            <Box flex={1}>
              <ListIcon as={VscFile} color="white" />
              <NavLink to={TodoRoute.getTodoPath(project.id)}>
                {project.name}
              </NavLink>
            </Box>
            <Form method="delete" action="project/delete">
              <IconButton
                type="submit"
                value={project.id}
                name="delete-project"
                variant="unstyled"
                color="white"
                icon={VscTrash}
                fontSize="2xl"
              />
            </Form>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default ProjectMenu
