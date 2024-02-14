export interface PaletteInterface {
  primary: string
  secondary: string
  buttonBgColor: string
  buttonTextColor: string
}

const commonColors = {
  white: '#FFFFFF',
  black: '#000000'
}

export const darkTheme: PaletteInterface = {
  primary: '#8CD6BD',
  secondary: '#004761',

  buttonBgColor: commonColors.white,
  buttonTextColor: commonColors.black
}

export const lightTheme: PaletteInterface = {
  primary: '#004761',
  secondary: '#8CD6BD',

  buttonBgColor: commonColors.black,
  buttonTextColor: commonColors.white
}
