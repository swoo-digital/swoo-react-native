import {countModel} from '../entities';

const {increment, decrement} = countModel.actions;

describe('count reducer', () => {
  const initialState = {count: 0};

  it('should handle initial state', () => {
    expect(countModel.reducer(undefined, {type: 'unknown'})).toEqual({
      count: 0,
    });
  });

  it('should handle increment', () => {
    const actual = countModel.reducer(initialState, increment());
    expect(actual.count).toEqual(1);
  });

  it('should handle decrement', () => {
    const actual = countModel.reducer({count: 1}, decrement());
    expect(actual.count).toEqual(0);
  });
});
