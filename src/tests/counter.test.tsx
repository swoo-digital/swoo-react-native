import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CounterScreen from '../screens/counter/counter.screen';
import {store} from '../store/store';
import {Provider} from 'react-redux';

describe('CounterScreen', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <CounterScreen />
      </Provider>,
    );
    expect(getByText('0')).toBeTruthy();
  });

  it('increment correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <CounterScreen />
      </Provider>,
    );
    const incrementButton = getByText('+1');
    fireEvent.press(incrementButton);
    expect(getByText('1')).toBeTruthy();
  });

  it('decrement correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <CounterScreen />
      </Provider>,
    );
    const decrementButton = getByText('-1');
    fireEvent.press(decrementButton);
    expect(getByText('-1')).toBeTruthy();
  });
});
