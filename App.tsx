import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Counter from './src/screen/Counter'
import { store } from './src/store/store'
import theme from './src/theme/theme'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Counter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
