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
import {ThemeProvider} from 'styled-components';
import Pad from './src/screens/MainPad';
import store from './src/redux/store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Pad />
      </Provider>
    </ThemeProvider>
  );
};

export default App;

const theme = {
  primary: {
    colors: {
      background: '#004761',
    },
  },
  secondary: {
    colors: {
      background: '#FFFFF',
    },
  },
};
