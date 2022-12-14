import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import App from '../App';
import {ReactTestInstance} from 'react-test-renderer';

describe('Testing Counter', () => {
  let counter: ReactTestInstance;

  beforeEach(() => {
    render(<App />);
    counter = screen.getByTestId('counter');
  });

  test('Default count equals 0', () => {
    expect(counter.props.children).toBe(0);
  });

  test('Test increment button', () => {
    const incrementButton = screen.getByText('+1');

    fireEvent.press(incrementButton);
    expect(counter.props.children).toBe(1);
    fireEvent.press(incrementButton);
    expect(counter.props.children).toBe(2);
  });

  test('Test decrement button', () => {
    const decrementButton = screen.getByText('-1');

    fireEvent.press(decrementButton);
    expect(counter.props.children).toBe(1);
    fireEvent.press(decrementButton);
    expect(counter.props.children).toBe(0);
  });
});
