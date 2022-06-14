/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const handleSubtractOne = () => {
    setCount(prevValue => prevValue - 1);
  };

  const handleAddOne = () => {
    setCount(prevValue => prevValue + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleSubtractOne}>
        <Text style={styles.buttonText}>-1</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleAddOne}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004761',
  },
  text: {
    fontSize: 64,
    color: '#8cd6bd',
    fontWeight: '700',
  },
  button: {
    width: 160,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default App;
