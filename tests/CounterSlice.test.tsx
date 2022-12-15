import {store} from '../store/store';
import {decrement, increment} from '../store/reducers/counterSlice';

describe('Testing Counder Slice', () => {
  it('Should init value is defined', () => {
    const state = store.getState().counter.value;
    expect(state).toBeDefined();
  });
  it('Should init value is 0', () => {
    const state = store.getState().counter.value;
    expect(state).toEqual(0);
  });
  it('should decrement the counter redux state value with 1', () => {
    let state = store.getState().counter;
    const value = state.value;
    store.dispatch(decrement());
    state = store.getState().counter;
    const changeCount = state.value;
    expect(changeCount).toBe(value - 1);
  });
  it('should increment the counter redux state value with 1', () => {
    let state = store.getState().counter;
    const value = state.value;
    store.dispatch(increment());
    state = store.getState().counter;
    const changeCount = state.value;
    expect(changeCount).toBe(value + 1);
  });
});
