import React from 'react'
import { StyleSheet, View, ListView, TouchableHighlight, Text, Switch } from 'react-native'
import TaskRow from './TaskRow/Component'

const styles = StyleSheet.create(
  {
    container: {
      paddingTop: 50,
      backgroundColor: '#f7f7f7',
      flex: 1,
      justifyContent: 'flex-start',
    },
    button: {
      height: 60,
      borderColor: '#05A5D1',
      borderWidth: 2,
      backgroundColor: '#333',
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fafafa',
      fontSize: 20,
      fontWeight: '600',
    },
    switchRow: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    switchText: {
      fontWeight: '600',
      fontSize: 15,
      paddingTop: 5,
      paddingLeft: 15,
    },
    switch: {
      marginLeft: 15,
    },
  }
)
class TaskList extends React.Component {
    constructor(props, context) {
      super(props, context)

      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })

      this.state = { dataSource: ds.cloneWithRows(props.todos) }
    }

    componentWillReceiveProps(nextProps) {
      const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
      this.setState({ dataSource })
    }

    renderRow(todo) {
      return (
        <TaskRow
            onDone={this.props.onDone}
            todo = {todo}
        />
      );
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.switchRow}>
            <Switch
                onValueChange={this.props.onToggle}
                style={styles.switch}
                value={this.props.filter !== 'pending'}
            />
            <Text style={styles.switchText}>
              Showing {this.props.todos.length} {this.props.filter} task(s)
            </Text>
          </View>
          <ListView
              dataSource={this.state.dataSource}
              enableEmptySections
              renderRow={this.renderRow.bind(this)}
          />
          <TouchableHighlight
              onPress={this.props.gotoAddBP}
              style={styles.button}
          >
            <Text style={styles.buttonText}>
              Add one
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
}

TaskList.propTypes = {
  filter: React.PropTypes.string.isRequired,
  gotoAddBP: React.PropTypes.func.isRequired,
  onDone: React.PropTypes.func.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}
export default TaskList
