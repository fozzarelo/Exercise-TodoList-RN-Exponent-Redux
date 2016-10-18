import { createStore } from 'redux'

const defTodos = [
  {
    task: 'Task_comming from the store',
    status: 'pending',
  },
  {
    task: 'Task that starts as done',
    status: 'done',
  },
]

const defState = {
  allTodos: defTodos,
  todos: defTodos.filter(todo => todo.status !== 'done'),
  filter: 'pending',
}

function taskStore(state = defState, action) {
  switch (action.type) {
  case 'Add_task':
    let updatedList = state.allTodos.concat([{
      task: action.task,
      status: 'pending',
    }])
    let result = Object.assign({}, state, {
      allTodos: updatedList,
      todos: updatedList.filter(todo => todo.status === state.filter),
    })
    return result
  case 'Toggle':
    const filter = state.filter === 'pending' ? 'done' : 'pending'
    result = Object.assign({}, state, {
      todos: state.allTodos.filter(todo => todo.status === filter),
      filter,
    })
    return result
  case 'Done_task':
    const doneTodo = Object.assign({}, action.todo, {
      status: 'done',
    })
    updatedList = state.allTodos.map(item => {
      return item === action.todo ? doneTodo : item
    })
    result = Object.assign({}, state, {
      allTodos: updatedList,
      todos: updatedList.filter(todo => todo.status === state.filter),
    })
    return result
  default:
    return state
  }
}

export default createStore(taskStore)
