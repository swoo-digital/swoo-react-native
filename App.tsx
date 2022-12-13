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
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Counter from './src/components/Counter';

const App = () => {
  return (
    <View style={{flex: 1, ...StyleSheet.absoluteFillObject}}>
      <Counter />
    </View>
  );
};

export default App;
