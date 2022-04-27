import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme';
import {store} from './src/redux/store';

import Home from './src/screens/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
