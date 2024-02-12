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
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from './src/theme';
import { Main } from './src/screens/Main';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.background }} >
      <StatusBar barStyle={'dark-content'} />
      <Main />
    </SafeAreaView>
  );
};

export default App;
