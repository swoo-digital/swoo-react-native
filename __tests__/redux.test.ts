import {store} from '../src/store/store';
import {increment, decrement} from '../src/store/counter/reducer';

test('Increment counter', () => {
  let state = store.getState().counter;
  expect(state.value).toBe(0);

  store.dispatch(increment());
  state = store.getState().counter;
  expect(state.value).toBe(1);

  for (let i = 0; i < 10; i += 1) {
    store.dispatch(increment());
  }
  state = store.getState().counter;
  expect(state.value).toBe(11);
});

test('Decrement counter', () => {
  let state = store.getState().counter;
  expect(state.value).toBe(11);

  store.dispatch(decrement());
  state = store.getState().counter;
  expect(state.value).toBe(10);

  for (let i = 0; i < 10; i += 1) {
    store.dispatch(decrement());
  }
  state = store.getState().counter;
  expect(state.value).toBe(0);
});
