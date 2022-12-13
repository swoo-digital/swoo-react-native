import {decrement, increment} from '../redux/reducer';
import store from '../redux/store';

test('should return the initial state', () => {
  let state = store.getState().counter;
  const count = state.value;
  expect(count).toBe(0);
});

test('should increment the counter state value with 1', () => {
  let state = store.getState().counter;
  const count = state.value;

  store.dispatch(increment());
  state = store.getState().counter;
  let changeCount = state.value;
  expect(changeCount).toBe(count + 1);
});

test('should decrement the counter state value with 1', () => {
  let state = store.getState().counter;
  const count = state.value;

  store.dispatch(decrement());
  state = store.getState().counter;
  let changeCount = state.value;
  expect(changeCount).toBe(count - 1);
});
