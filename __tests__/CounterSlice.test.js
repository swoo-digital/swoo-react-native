import {store} from '../src/store';
import {
  increamentCounter,
  decreamentCounter,
} from '../src/store/features/counterSlice';

describe('store/counter', () => {
  test('increamentCounter', () => {
    const query = 1;
    store.dispatch(increamentCounter(query));

    const {value} = store.getState().counter;
    expect(value).toBe(value);
  });

  test('decreamentCounter', () => {
    const query = -1;
    store.dispatch(decreamentCounter(query));

    const {value} = store.getState().counter;
    expect(value).toBe(value);
  });
});
