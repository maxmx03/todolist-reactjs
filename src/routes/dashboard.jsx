import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'
import Stats from '../components/molecules/stats'
import RangeBarChart from '../components/organisms/range-bar-chart'

function Dashboard() {
  const { todoData, projectData, totalProjects, totalTodo } = useLoaderData()

  return (
    <Flex
      h="full"
      display="flex"
      flexFlow="column wrap"
      justifyContent="space-around"
      padding={10}
      gap={50}
    >
      <Flex flexFlow="row wrap" gap={50}>
        <Stats
          label="Total Projects"
          number={totalProjects}
          background="blue.500"
          color="white"
        />
        <Stats
          label="Total Tasks"
          number={totalTodo}
          background="purple.500"
          color="white"
        />
      </Flex>
      <Flex flexFlow="row wrap" placeContent="center" gap={10}>
        <Tabs bg="white">
          <TabList>
            <Tab>Projects</Tab>
            <Tab>Todos</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <RangeBarChart keys={['projects']} legend="projects" data={projectData} />
            </TabPanel>
            <TabPanel>
              <RangeBarChart keys={['tasks']} legend="todos" data={todoData} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  )
}

export default Dashboard
