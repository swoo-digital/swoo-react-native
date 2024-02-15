import React from 'react';
import {cleanup, fireEvent} from '@testing-library/react-native';
import {render} from '../src/utils/test-utils';
import CounterScreen from '../src/screens/CounterScreen';

describe('CounterScreen', () => {
  afterEach(cleanup);

  it('renders with initial value 0', () => {
    const {getByTestId} = render(<CounterScreen />);

    expect(getByTestId('counter').props.children).toBe(0);
  });

  it('increases value on add button press', () => {
    const {getByTestId} = render(<CounterScreen />);

    fireEvent.press(getByTestId('addButton'));

    // Assuming your reducer correctly handles the 'counter/add' action
    expect(getByTestId('counter').props.children).toBe(1);
  });

  it('decreases value on subtract button press', () => {
    const {getByTestId} = render(<CounterScreen />);

    fireEvent.press(getByTestId('subtractButton'));

    // Assuming your reducer correctly handles the 'counter/subtract' action
    expect(getByTestId('counter').props.children).toBe(-1);
  });
});
