import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {useColorScheme} from 'react-native';

import {store} from './store';
import {appTheme} from './theme';
import {Main} from '../screens';

const Application = () => {
  const [theme, setTheme] = React.useState<{
    backgroundColor: string;
    button: string;
    text: string;
  }>(appTheme.light);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    colorScheme === 'dark' ? setTheme(appTheme.dark) : setTheme(appTheme.light);
  }, [colorScheme]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </Provider>
  );
};

export default Application;
