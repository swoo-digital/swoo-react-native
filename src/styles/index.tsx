import {DefaultTheme, SecondTheme} from 'styled-components/native';
import {colors, secondColors} from './colors';

export const defaultTheme: DefaultTheme = {
  name: 'default-theme',
  colors: {
    background: colors.background,
    buttons: colors.buttons,
    text: colors.text,
    title: colors.title,
  },
};

export const secondTheme: SecondTheme = {
  name: 'second-theme',
  colors: {
    background: secondColors.darkBackground,
    buttons: secondColors.buttons,
    text: secondColors.text,
    title: secondColors.title,
  },
};
