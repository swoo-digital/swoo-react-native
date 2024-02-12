import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/theme'
import { Provider } from 'react-redux'
import { store } from './src/store'
import counterReducer from './src/store/counter'
import { configureStore } from '@reduxjs/toolkit'

jest.mock('./src/localization', () => ({
  t: jest.fn()
}))

const renderWithStore = (componentThatRender) => {
  const store = configureStore({
    reducer: {
      counter: counterReducer
    }
  })

  return render(<Provider store={store}>{componentThatRender}</Provider>)
}

const wrapWithTheme = (componentThatRender) => {
  return <ThemeProvider theme={theme}>{componentThatRender}</ThemeProvider>
}

global.renderWithStore = renderWithStore
global.wrapWithTheme = wrapWithTheme
