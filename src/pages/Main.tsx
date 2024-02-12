import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import { store } from '../store'
import Home from '../pages/Home'

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white'
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home />
      </SafeAreaView>
    </Provider>
  )
}

export default Main
