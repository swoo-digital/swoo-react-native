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
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Counter from './screens/Counter';
import {store} from './store/reducer';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <Counter />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
