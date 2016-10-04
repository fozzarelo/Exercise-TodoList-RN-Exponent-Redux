import React from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
      paddingTop: 150,
      backgroundColor: '#f7f7f7',
      flex: 1,
      justifyContent: 'flex-start',
    },
    input: {
      borderWidth: 1,
      borderColor: '#d7d7d7',
      height: 50,
      margin: 10,
      padding: 15,
      borderRadius: 3,
    },
    button: {
      height: 45,
      borderColor: '#05A5D1',
      borderWidth: 2,
      backgroundColor: '#333',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fafafa',
      fontSize: 18,
      fontWeight: '600',
    },
    cancelButton: {
      backgroundColor: '#666',
    },
  }
)

class TaskForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  onChange(text) {
    this.task = text
  }

  addBP() {
    this.props.addTask(this.task)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            onChangeText={this.onChange.bind(this)}
            style={styles.input}
        />
        <TouchableHighlight
            onPress={this.addBP.bind(this)}
            style={styles.button}
        >
          <Text style={styles.buttonText}>
            Add task
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.props.cancelBP}
            style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskForm.propTypes = {
  addTask: React.PropTypes.func.isRequired,
  cancelBP: React.PropTypes.func.isRequired,
}

export default TaskForm
