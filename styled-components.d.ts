import 'styled-components/native';
import {theme} from './src/assets/theme/theme';

type CustomTheme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}
