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
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {MainScreen} from './src/Containers/MainScreen/MainScreen';
import {store} from './src/store';
import theme from './src/Theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
