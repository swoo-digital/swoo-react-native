import React from 'react';
import renderer from 'react-test-renderer';
import CounterScreen from '../src/screens/CounterScreen';

import {Provider} from 'react-redux';
import {store} from '../src/store';

it('counterScreen snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CounterScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
