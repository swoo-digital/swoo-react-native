import { useState, useEffect } from 'react'
import { Appearance, useColorScheme } from 'react-native'

import { darkTheme, lightTheme } from '../../theme/palette'
import theme from '../../theme'

export const useTheme = () => {
  const initialColorScheme = useColorScheme()
  const [currentTheme, setCurrentTheme] = useState(initialColorScheme)

  const isDarkTheme = currentTheme === 'dark'

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setCurrentTheme(colorScheme)
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return { ...theme, palette: isDarkTheme ? darkTheme : lightTheme }
}
