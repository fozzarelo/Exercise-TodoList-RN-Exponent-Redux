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
  let fade = new Animated.Value(1)

  function handleDoneBP() {
  //  Animated.timing(fade, { toValue: 0.2, duration: 500 }).start();
    setTimeout(x => { this.doneBP.bind(this)() }, 500)
    fade = new Animated.Value(1)
  }

  const swipeItems = [
    {
      text: 'Done',
      backgroundColor: '#5D5D00',
      underlayColor: '#5D5D50',
      onPress: handleDoneBP.bind(this),
    },
  ]

  return (
    <Animated.View style={[styles.rowContainer, { opacity: fade }]}>
      <Swipeout right={swipeItems}>
          <View style={styles.textContainer}>
            <Text style = {styles.label}>
              {this.props.todo.task}
            </Text>
          </View>
      </Swipeout>
    </Animated.View>
  );
}
