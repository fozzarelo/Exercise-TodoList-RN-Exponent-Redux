import Exponent from 'exponent'
import { Navigator, Text } from 'react-native'
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

  addBP() {
    this.nav.push({
      name: 'taskForm',
    })
  }

  renderScene(route, nav) {
    switch (route.name) {
    case 'taskForm':
      return (
          <TaskForm />
        );
    default:
      return (
          <TaskList
              addBP={this.addBP.bind(this)}
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
          initialRoute={{ name: 'taskForm', index: 0 }}
          ref={((nav) => {this.nav = nav})}
          renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
Exponent.registerRootComponent(App);
