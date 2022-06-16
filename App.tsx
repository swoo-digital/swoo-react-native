import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import Screen from './src/screen/MainScreen';
import store from './src/redux/store';
import {theme} from './src/utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Screen />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
