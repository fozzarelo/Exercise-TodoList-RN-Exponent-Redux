import { createStore } from 'redux'

const defTodos = [
  {
    task: 'Task_comming from the store',
    status: 'pending',
  },
]

const defState = {
  todos: defTodos,
  allTodos: defTodos,
  filter: 'pending',
}

function taskStore(state = defState, action) {
  switch (action.type) {
  case 'Add_task':
    return Object.assign({}, state, {
      todos: state.todos.concat([{
        task: action.task,
        status: 'pending',
      }]),
    });
  case 'Toggle':
    console.log(state.filter)
    console.log(state.allTodos)
    return Object.assign({}, state, {
      todos: state.allTodos.filter(todo => todo.status !== state.filter),
      filter: state.filter === 'pending' ? 'done' : 'pending',
    });
  case 'Done_task':
    const doneTodo = Object.assign({}, action.todo, {
      status: 'done',
    })
    const updatedList = state.todos.map(item => {
      return item === action.todo ? doneTodo : item
    })
    return Object.assign({}, state, {
      todos: updatedList.filter(todo => todo.status !== state.filter),
    });
  default:
    return state
  }
}

export default createStore(taskStore)
