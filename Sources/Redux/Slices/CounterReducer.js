import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const CounterReducer = createSlice({
  name: 'Counter',
  initialState: initialState,
  reducers: {
    Increment: state => {
      state.value += 1;
    },
    Decrement: state => {
      state.value -= 1;
    },
    SetCounter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Increment, Decrement, SetCounter } = CounterReducer.actions;

export default CounterReducer.reducer;
