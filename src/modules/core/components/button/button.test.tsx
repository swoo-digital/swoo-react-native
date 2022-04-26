/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Button} from './button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

it('Button renders correctly', () => {
  renderer.create(<Button title="test" />);
});

it('Button should be clickable', () => {
  const press = jest.fn();

  const {getByText} = render(<Button title="test" onPress={press} />);

  fireEvent.press(getByText('test'));

  expect(press).toBeCalledTimes(1);
});
