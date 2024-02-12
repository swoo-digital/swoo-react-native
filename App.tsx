import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import CounterScreen from './src/CounterScreen';

const theme = {
  colors: {
    primary: '#004761',
    secondary: '#8CD6BD',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CounterScreen />
    </ThemeProvider>
  );
};

export default App;
