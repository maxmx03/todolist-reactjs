import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Header = styled.header`
  background: var(--primary-color);
  height: 15%;
  max-height: 15%;
  display: flex;
  flex-flow: row wrap;
  place-content: center flex-start;
  padding: 0 10px 0 10px;
`

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--black);
`

const TodoList = styled.div`
  background: var(--background-color);
  display: flex;
  flex-flow: column wrap;
  place-content: center flex-start;
  row-gap: 30px;
`

const TodoHeader = styled.div`
  display: flex;
  column-gap: 10px;
  flex-flow: row wrap;
  place-content: center;
  margin-top: 50px;
`

const TodoHeaderImg = styled.img`
  height: 50px;
  width: 50px;
`

const TodoHeaderInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  row-gap: 3px;
`

const TotalTask = styled.div`
  color: gray;
`

const TodoHeaderTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: var(--black);
`

const TodoItems = styled.div`
  display: flex;
  flex-flow: row wrap;
  place-content: flex-start space-around;
  width: 100%;
  align-items: center;
`

const TodoItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  place-content: center space-around;
  column-gap: 10px;
  width: 100%;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`

// Bateu uma preguiça usar o checkbox, mas vou deixar aqui
// const Checkbox = styled.input.attrs({
//   type: 'checkbox',
// })`
//   appearance: none;
//   border: solid 1px gray;
//   border-radius: 3px;
//   background: white;
//   height: 30px;
//   width: 30px;
//
//   &:checked {
//     background-image: url('checkmark.png');
//     background-position: center;
//     background-size: 24px;
//     background-repeat: no-repeat;
//   }
// `
//
const TodoTask = styled.p`
  color: var(--black);
  font-size: 1.5rem;
`

const TrashCan = styled.img`
  height: 40px;
  width: 40px;
`

const TaskEntry = styled.div`
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  gap: 20px;
`

const TaskEntryInput = styled.input.attrs({
  type: 'text',
})`
  border-radius: 7px;
  padding: 10px;
  font-size: 1.5rem;
  background: var(--primary-color);
`

const TaskEntryButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background: var(--primary-color);
`

function App() {
  const [todolist, setTodoList] = useState([])
  const [userTask, setUserTask] = useState('')
  const [totalTasks, setTotalTasks] = useState(0)

  useEffect(() => {
    const total = todolist.length

    setTotalTasks(total)
  }, [todolist])

  function addTask() {
    if (!userTask) return
    const copiedlist = [...todolist]
    const id = Math.random() + Date.now()
    if (userTask.length > 0) copiedlist.push({ name: userTask, id })

    setTodoList(copiedlist)
  }

  function DeleteTask(id) {
    let copiedlist = [...todolist]
    copiedlist = copiedlist.filter((todo) => todo.id !== id)

    setTodoList(copiedlist)
  }

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>TodoList</HeaderTitle>
      </Header>
      <TodoList>
        <TodoHeader>
          <TodoHeaderImg src="person.png" />
          <TodoHeaderInfo>
            <TotalTask>{totalTasks} Tasks</TotalTask>
            <TodoHeaderTitle>Personal</TodoHeaderTitle>
          </TodoHeaderInfo>
        </TodoHeader>
        <TaskEntry>
          <TaskEntryInput
            value={userTask}
            onChange={(e) => setUserTask(e.target.value)}
          />
          <TaskEntryButton onClick={addTask}>ADD</TaskEntryButton>
        </TaskEntry>
        <TodoItems>
          {todolist.map((todo) => (
            <TodoItem key={todo.id}>
              <Box>
                <TodoTask>{todo.name}</TodoTask>
              </Box>
              <TrashCan
                src="trashcan.png"
                onClick={() => DeleteTask(todo.id)}
              />
            </TodoItem>
          ))}
        </TodoItems>
      </TodoList>
    </Wrapper>
  )
}

export default App
