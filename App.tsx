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
import Counter from './src/screens/Counter';
import {defaultTheme, secondTheme} from './src/styles';
import {store} from './store/store';
import {useColorScheme} from 'react-native';
const App: React.FC = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === 'light' ? defaultTheme : secondTheme}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
