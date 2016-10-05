import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
      padding: 20,
      backgroundColor: '#fff',
      borderColor: '#e7e7e7',
      borderWidth: 1,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    label: {
      fontSize: 20,
      fontWeight: '300',
    },
    doneButton: {
      borderRadius: 5,
      backgroundColor: '#eaeaea',
      padding: 5,
    },
  }
)

class TaskRow extends React.Component {

  doneBP() {
    this.props.onDone(this.props.todo)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.label}>
          {this.props.todo.task}
        </Text>
        <TouchableHighlight
            onPress={this.doneBP.bind(this)}
            style={styles.doneButton}
        >
          <Text>
            Done
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskRow.propTypes = {
  onDone: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired,
  }).isRequired,

}

export default TaskRow
