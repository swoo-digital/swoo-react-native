/**
 * @format
 */

import 'react-native';

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import App from '../App';
import reducer, {subtract} from '../src/actions';

describe('counter', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('1 + 1 equals 2', () => {
    expect(1 + 1).toEqual(2);
  });

  it('shows an initial state as 0', () => {
    expect(reducer(undefined, {})).toEqual({
      value: 0,
    });
  });

  it('increments by 1 each time increment is pressed', () => {
    const {queryByText, getByTestId} = render(<App />);

    const increment = getByTestId('addButton');
    expect(increment).not.toBeNull();
    fireEvent.press(increment);

    const oneState = queryByText('1');
    expect(oneState).not.toBeNull();
  });

  it('decrements by 1 each time subtract is pressed', () => {
    const {getByTestId} = render(<App />);
    const previousState = {value: 0};
    expect(reducer(previousState, subtract())).toEqual({
      value: previousState.value - 1,
    });

    const decrement = getByTestId('minusButton');
    expect(decrement).not.toBeNull();

    fireEvent.press(decrement);
  });
});
