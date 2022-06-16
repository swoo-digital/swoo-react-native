/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import CounterRedux from './src/component/counterRedux';
import CounterReducer from "./src/reducer"

const rootReducer = combineReducers({
  counter: CounterReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <CounterRedux />
    </Provider>
  );
};

export default App;
