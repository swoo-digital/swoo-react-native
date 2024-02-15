import React, {ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/counterReducer';
import {Provider} from 'react-redux';
import {theme} from '../assets/theme/theme';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  const store = configureStore({
    reducer: {counter: counterReducer},
    preloadedState: {
      counter: {
        counter: 0,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>,
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
