/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider } from 'react-redux';
import { useAppDispatch, useAppSelector } from './src/hooks/redux';
import { dataSlice } from './src/store/reducers/DataSlice';
import { setupStore } from './src/store/store';

const App = () => {
  // const [count, setCount] = useState(0);

  const { counter } = dataSlice.actions;

  const { countRedux } = useAppSelector(state => state.dataReducer);

  const dispatch = useAppDispatch();

  const handleSubtractOne = () => {
    dispatch(counter(1));
  };

  // const handleAddOne = () => {
  //   setCount(prevValue => prevValue + 1);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleSubtractOne}>
        <Text style={styles.buttonText}>-1</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{countRedux}</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>+1</Text>
      </TouchableOpacity>
    </View>
  );
};

const store = setupStore();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
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
    marginVertical: 104,
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

export default AppWrapper;
