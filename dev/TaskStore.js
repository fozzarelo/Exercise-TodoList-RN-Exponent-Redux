import { createStore } from 'redux'

const defState = {
  todos: [
    {
      task: 'Task_comming from the store',
    },
  ],
}

function taskStore(state = defState, action) {
  switch (action.type) {
  case 'Add_task':
    return Object.assign({}, state, {
      todos: state.todos.concat([{ task: action.task }]),
    });
  case 'Kill_task':
    return Object.assign({}, state, {
      todos: state.todos.filter(todo => todo !== action.todo),
    });
  default:
    return state
  }
}

export default createStore(taskStore)
