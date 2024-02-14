import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../theme';

interface ThemeTestWrapperProps {
  children: React.ReactNode;
}

const ThemeTestWrapper = (props: ThemeTestWrapperProps) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeTestWrapper;
