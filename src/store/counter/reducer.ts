import {createSlice} from '@reduxjs/toolkit';
import {incrementHandler, decrementHandler} from './actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: incrementHandler,
    decrement: decrementHandler,
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
