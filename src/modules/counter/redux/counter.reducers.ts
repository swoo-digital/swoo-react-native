import {createReducer} from '@reduxjs/toolkit';
// actions
import {decrement, increment} from 'modules/counter/redux/counter.actions';

export interface CounterState {
  value: number;
}

export const counterDefaultState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(counterDefaultState, builder => {
  builder.addCase(increment, (state, action) => ({
    ...state,
    value: state.value + action.payload,
  }));
  builder.addCase(decrement, (state, action) => ({
    ...state,
    value: state.value - action.payload,
  }));
});
