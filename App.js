import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { useColorScheme } from 'react-native';
import App from './src/Screen/CounterScreen'
import { store } from './store'
import MyContext, { themes } from './src/context/MyContext'


const Root = (props) => {

  const [themeColor, setTheme] = useState(themes.light)
  const defaultTheme = useColorScheme()

  useEffect(() => {
    toggleTheme()
  }, [])

  const toggleTheme = () => {
    if (defaultTheme == "light") {
      setTheme(themes.light)
    } else {
      setTheme(themes.dark)
    }
  }

  return (
    <Provider store={store}>
      <MyContext.Provider value={{ themeColor, toggleTheme }}>
        <App />
      </MyContext.Provider>
    </Provider>
  );
};

export default Root;
