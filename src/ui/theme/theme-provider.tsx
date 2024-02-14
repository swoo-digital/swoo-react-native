import React from 'react';
import {darkTheme, ITheme, lightTheme} from './theme';
import {useColorScheme} from 'react-native';

export const ThemeContext: React.Context<{theme: ITheme}> = React.createContext(
  {
    theme: darkTheme,
  },
);

const ThemeProvider = ({children}: any) => {
  const isDarkTheme = useColorScheme() === 'dark';

  const theme: {theme: ITheme} = {
    theme: isDarkTheme ? darkTheme : lightTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
