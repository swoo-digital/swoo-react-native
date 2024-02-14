import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import CounterScreen from './src/screens/CounterScreen';
import {theme} from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CounterScreen />
    </ThemeProvider>
  );
};

export default App;
