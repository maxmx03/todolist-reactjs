import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Stack,
} from '@chakra-ui/react'
import { VscAdd, VscFile, VscFolder, VscFolderOpened } from 'react-icons/vsc'
import React from 'react'
import { Form, useLoaderData, NavLink } from 'react-router-dom'

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
            variant="flushed"
            placeholder="Insert project name"
            color="white"
            name="project"
          />
          <Button type="submit" variant="unstyled">
            <VscAdd color="white" size="32" />
          </Button>
        </Stack>
      </Form>
      <Accordion allowToggle>
        <AccordionItem color="white">
          {({ isExpanded }) => (
            <React.Fragment>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  My Projects
                </Box>
                {isExpanded ? <VscFolderOpened /> : <VscFolder />}
              </AccordionButton>
              <AccordionPanel pb={4}>
                <List spacing={3}>
                  {projects.map((project) => (
                    <ListItem key={project.id}>
                      <ListIcon as={VscFile} color="white" />
                      <NavLink to={`/todolist-reactjs/${project.id}/todo`}>
                        {project.name}
                      </NavLink>
                    </ListItem>
                  ))}
                </List>
              </AccordionPanel>
            </React.Fragment>
          )}
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

export default ProjectMenu
