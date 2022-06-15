import {Text} from 'react-native';
import React from 'react';

import renderer, {act} from 'react-test-renderer';
import App from '../App';
import {store} from '../src/store';
import {reset} from '../src/components/counter/slice';

afterEach(() => {
  act(() => {
    store.dispatch(reset());
  });
});

it('counter initiates at 0 and buttons have correct text', () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  expect(
    testInstance
      .findByProps({
        'data-testid': 'button-decrement',
      })
      .findByType(Text).props.children,
  ).toEqual('-1');

  expect(
    testInstance
      .findByProps({
        'data-testid': 'button-increment',
      })
      .findByType(Text).props.children,
  ).toEqual('+1');

  expect(
    testInstance.findByProps({
      'data-testid': 'counter-value',
    }).props.children,
  ).toEqual(0);
});

it('counter increment works', () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  expect(
    testInstance.findByProps({
      'data-testid': 'counter-value',
    }).props.children,
  ).toEqual(0);

  act(() => {
    testInstance
      .findByProps({
        'data-testid': 'button-increment',
      })
      .props.onPress();
  });

  expect(
    testInstance.findByProps({
      'data-testid': 'counter-value',
    }).props.children,
  ).toEqual(1);
});

it('counter decrement works', () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  act(() => {
    testInstance
      .findByProps({
        'data-testid': 'button-decrement',
      })
      .props.onPress();
  });

  expect(
    testInstance.findByProps({
      'data-testid': 'counter-value',
    }).props.children,
  ).toEqual(-1);
});

it('counter multiple actions result in correct final value', () => {
  const testRenderer = renderer.create(<App />);
  const testInstance = testRenderer.root;

  // Ensure that state is reset.
  expect(
    testInstance.findByProps({
      'data-testid': 'counter-value',
    }).props.children,
  ).toEqual(0);

  const decrementButton = testInstance.findByProps({
    'data-testid': 'button-decrement',
  });

  const incrementButton = testInstance.findByProps({
    'data-testid': 'button-increment',
  });

  act(() => {
    decrementButton.props.onPress();
    decrementButton.props.onPress();
    decrementButton.props.onPress();

    incrementButton.props.onPress();
  });

  expect(
    testInstance.findByProps({
      'data-testid': 'counter-value',
    }).props.children,
  ).toEqual(-2);
});
