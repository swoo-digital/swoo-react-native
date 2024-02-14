import { useState, useEffect } from 'react'
import { Appearance, useColorScheme } from 'react-native'

import { darkTheme, lightTheme } from '../constants'

export const useTheme = () => {
  const initialColorScheme = useColorScheme()
  const [theme, setTheme] = useState(initialColorScheme)

  const isDarkTheme = theme === 'dark'

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme)
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return isDarkTheme ? darkTheme : lightTheme
}
