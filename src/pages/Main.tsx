import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import Home from '../pages/Home'
import SafeArea from '../components/SafeArea'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../theme'
import '../localization'

const Main = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Home />
        </SafeArea>
      </ThemeProvider>
    </Provider>
  )
}

export default Main
