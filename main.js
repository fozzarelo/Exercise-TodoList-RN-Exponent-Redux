import Exponent from 'exponent'
import { Navigator } from 'react-native'
import React from 'react'
import TaskList from './dev/TaskList'
import TaskForm from './dev/TaskForm'
import store from './dev/TaskStore'

class App extends React.Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  gotoAddBP() {
    console.log('going to add')
    this.nav.push({
      name: 'taskForm',
    })
  }

  cancelBP() {
    this.nav.pop()
  }

  addTask(task) {
    // console.log('gonna add a new task', task)
    // this.state.todos.push({ task })
    // this.setState({ todos: this.state.todos })
    store.dispatch({
      type: 'Add_task',
      task,
    })
    this.nav.pop()
  }

  doneTask(todo) {
    // const filteredTodos = this.state.todos.filter((filterTodo) => {
    //   return filterTodo !== todo
    // })
    // this.setState({ todos: filteredTodos })
    store.dispatch({
      type: 'Done_task',
      todo,
    })
  }

  toggle() {
    console.log('calling store dispatch')
    store.dispatch({
      type: 'Toggle',
    })
  }

  renderScene(route, nav) {
    switch (route.name) {
    case 'taskForm':
      return (
          <TaskForm
              addTask={this.addTask.bind(this)}
              cancelBP={this.cancelBP.bind(this)}
          />
        );
    default:
      return (
          <TaskList
              filter={this.state.filter}
              gotoAddBP={this.gotoAddBP.bind(this)}
              onDone={this.doneTask.bind(this)}
              onToggle={this.toggle.bind(this)}
              todos = {this.state.todos}
          />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
          configureScene={this.configureScene}
          initialRoute={{ name: 'TaskList', index: 0 }}
          ref={((nav) => {this.nav = nav})}
          renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
Exponent.registerRootComponent(App);
