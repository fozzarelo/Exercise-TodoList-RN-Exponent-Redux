import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#05A5D1',
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 10,
    width: 100,
    height: 45,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
  },
});

export default class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight
          onPress={this.props.onPress}
          style={styles.button}
          underlayColor={'gray'}
      >
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}
