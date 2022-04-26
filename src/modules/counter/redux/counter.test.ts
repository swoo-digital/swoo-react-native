import {counterDefaultState, counterReducer} from './counter.reducers';
import {decrement, increment} from './counter.actions';

test('counter should increment state', () => {
  expect(counterReducer(counterDefaultState, increment(1))).toEqual({
    value: 1,
  });
});

test('counter should decrement state', () => {
  expect(counterReducer(counterDefaultState, decrement(1))).toEqual({
    value: -1,
  });
});

test('counter should work with previous state', () => {
  const previousState = {value: 5};
  expect(counterReducer(previousState, increment(3))).toEqual({
    value: 8,
  });
});
