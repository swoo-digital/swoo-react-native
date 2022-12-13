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
import {store} from './src/store';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';

import Counter from './src/components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Counter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
