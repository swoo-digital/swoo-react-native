import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Counter from './src/screens/Counter'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <Counter />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})