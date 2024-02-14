import {useContext} from 'react';
import {ThemeContext} from '../ui/theme/theme-provider';

export default function useTheme() {
  return useContext(ThemeContext);
}
