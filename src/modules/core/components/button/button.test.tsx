/**
 * @format
 */

import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from './button';

it('Button renders correctly', () => {
  render(<Button title="test" />);
});

it('Button should be clickable', () => {
  const press = jest.fn();

  const {getByText} = render(<Button title="test" onPress={press} />);

  fireEvent.press(getByText('test'));

  expect(press).toBeCalledTimes(1);
});
