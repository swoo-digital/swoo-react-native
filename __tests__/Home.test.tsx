/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from 'screens/home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

it('Home screen renders correctly', () => {
  renderer.create(<Home />);
});

it('Home screen should display default counter', () => {
  const {getByText} = render(<Home />);

  expect(getByText('0')).toBeDefined();
});
