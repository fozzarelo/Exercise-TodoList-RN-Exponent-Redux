import Exponent from 'exponent'
import { Navigator } from 'react-native'
import React from 'react'
import TaskList from './dev/taskList'
import TaskForm from './dev/taskForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { task: 'task_one' },
        { task: 'task_two' },
      ],
    }
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
    console.log('gonna add a new task', task)
    this.state.todos.push({ task })
    this.setState({ todos: this.state.todos })
    this.nav.pop()
  }

  killTask(todo) {
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo !== todo
    })
    this.setState({ todos: filteredTodos })
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
              gotoAddBP={this.gotoAddBP.bind(this)}
              onDone={this.killTask.bind(this)}
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
