import React from 'react';
import CounterApp from './src/index';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {store} from './src/store';
import theme from './src/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CounterApp />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
