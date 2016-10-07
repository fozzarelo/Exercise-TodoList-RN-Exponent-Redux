import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create(
  {
    rowContainer: {
      marginBottom: 20,
    },
    textContainer: {
      padding: 20,
      backgroundColor: '#fff',
      borderColor: '#e7e7e7',
      borderWidth: 1,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
    },
    label: {
      fontSize: 20,
      fontWeight: '300',
    },
    doneButton: {
      borderRadius: 5,
      backgroundColor: '#5D5D00',
      padding: 5,
    },
    doneButtonText: {
      color: '#fafafa',
      fontSize: 18,
      fontWeight: '600',
    },
  }
)

export default function Render() {
  return (
    <View style={styles.rowContainer}>
          <View style={styles.textContainer}>
            <Text style = {styles.label}>
              {this.props.todo.task}
            </Text>
            <TouchableHighlight
                onPress={this.doneBP.bind(this)}
                style={styles.doneButton}
            >
              <Text style={styles.doneButtonText}>
                Done
              </Text>
            </TouchableHighlight>
          </View>
    </View>
  );
}
