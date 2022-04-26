/**
 * @format
 */

import 'react-native';
import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from 'utils/render-with-providers';
import Home from 'screens/home';

it('Home screen renders correctly', () => {
  renderWithProviders(<Home />);
});

it('Home screen should display default counter', () => {
  const {getByText} = renderWithProviders(<Home />);

  expect(getByText('0')).toBeDefined();
});

it('Home screen should increment value', async () => {
  const {getByText} = renderWithProviders(<Home />);

  const incrementButton = getByText('+1');

  fireEvent.press(incrementButton);

  expect(await getByText('1')).toBeDefined();

  fireEvent.press(incrementButton);
  fireEvent.press(incrementButton);

  expect(await getByText('3')).toBeDefined();
});

it('Home screen should decrement value', async () => {
  const {getByText} = renderWithProviders(<Home />);

  const decrementButton = getByText('-1');

  fireEvent.press(decrementButton);
  fireEvent.press(decrementButton);

  expect(await getByText('-2')).toBeDefined();

  fireEvent.press(decrementButton);
  fireEvent.press(decrementButton);

  expect(await getByText('-4')).toBeDefined();
});
