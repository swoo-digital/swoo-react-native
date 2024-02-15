import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../assets/theme/theme';
import CounterScreen from './CounterScreen';
import {store} from '../redux/store';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CounterScreen />
      </Provider>
    </ThemeProvider>
  );
};

export default Main;
