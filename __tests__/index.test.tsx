import * as React from 'react';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import {store} from '../src/store';
import Counter from '../src/index';
import {ThemeProvider} from 'styled-components';
import theme from '../src/theme';

describe('AddTodo component test', () => {
  it('renders the counter with initial value', () => {
    const {getByText} = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Counter />
        </ThemeProvider>
      </Provider>,
    );
    expect(getByText('0')).toBeTruthy();
  });
  it('increments the counter correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Counter />
        </ThemeProvider>
      </Provider>,
    );
    fireEvent.press(getByText('+1'));
    expect(getByText('1')).toBeTruthy();
  });

  it('decrements the counter correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Counter />
        </ThemeProvider>
      </Provider>,
    );
    fireEvent.press(getByText('-1'));
    expect(getByText('-1')).toBeTruthy();
  });
});
