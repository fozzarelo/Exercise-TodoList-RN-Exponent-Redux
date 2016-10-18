import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import Swipeout from 'react-native-swipeout'

const styles = StyleSheet.create(
  {
    rowContainer: {
      marginBottom: 15,
    },
    textContainer: {
      padding: 20,
      backgroundColor: '#fff',
      borderColor: '#e7e7e7',
      borderWidth: 1,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 0,
    },
    label: {
      fontSize: 20,
      fontWeight: '300',
    },
  }
)

export default function Render() {
  const fade = new Animated.Value(1)

  function handleDoneBP() {
    Animated.timing(fade, { toValue: 0.1, duration: 250 }).start(x => this.doneBP.bind(this)())
  }
  function handleDeleteBP() {
    Animated.timing(fade, { toValue: 0.1, duration: 250 }).start(x => this.deleteBP.bind(this)())
  }
  function handlePendingBP() {
    Animated.timing(fade, { toValue: 0.2, duration: 250 }).start(x => this.pendingBP.bind(this)())
  }
  let swipeItems = [
    {
      text: 'Done',
      backgroundColor: '#5D5D00',
      underlayColor: '#5D5D50',
      onPress: handleDoneBP.bind(this),
    },
  ]
  if (this.props.todo && this.props.todo.status === 'done') {
    swipeItems = [
      {
        text: 'Delete',
        backgroundColor: '#5DAA00',
        underlayColor: '#5D5D50',
        onPress: handleDeleteBP.bind(this),
      },
      {
        text: 'Pending',
        backgroundColor: '#5D5D00',
        underlayColor: '#5D5D50',
        onPress: handlePendingBP.bind(this),
      },
    ]
  }
  Animated.timing(fade, { toValue: 1, duration: 0.1 }).start();
  return (
    <View style={styles.rowContainer}>
      <Swipeout
          autoClose
          right={swipeItems}
      >
          <View style={styles.textContainer}>
            <Animated.Text style = {[styles.label, { opacity: fade }]}>
              {this.props.todo.task}
            </Animated.Text>
          </View>
      </Swipeout>
    </View>
  );
}
