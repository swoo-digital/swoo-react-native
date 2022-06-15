import {store} from '../src/store/store';
import {increment, decrement} from '../src/store/counter/reducer';

test('Increment counter', () => {
  const initState = store.getState().counter;
  expect(initState.value).toBe(0);

  store.dispatch(increment());
  let state = store.getState().counter;
  expect(state.value).toBe(1);
  expect(state.value).toBeGreaterThan(initState.value);

  for (let i = 0; i < 10; i += 1) {
    store.dispatch(increment());
  }
  state = store.getState().counter;
  expect(state.value).toBe(11);
});

test('Decrement counter', () => {
  const initState = store.getState().counter;
  expect(initState.value).toBe(11);

  store.dispatch(decrement());
  let state = store.getState().counter;
  expect(state.value).toBe(10);
  expect(state.value).toBeLessThan(initState.value);

  for (let i = 0; i < 10; i += 1) {
    store.dispatch(decrement());
  }
  state = store.getState().counter;
  expect(state.value).toBe(0);
});
