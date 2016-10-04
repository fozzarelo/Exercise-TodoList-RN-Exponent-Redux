import React from 'react'
import { StyleSheet, View, ListView, TouchableHighlight, Text } from 'react-native'
import TaskRow from './taskRow'

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
            todo = {todo}
        />
      );
    }

    render() {
      return (
        <View style={styles.container}>
          <ListView
              dataSource={this.state.dataSource}
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
  gotoAddBP: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}
export default TaskList
