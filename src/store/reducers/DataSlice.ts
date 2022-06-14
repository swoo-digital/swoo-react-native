import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Counter {
  value: number;
}

const initialState: Counter = {
  value: 0,
};

export const dataSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    incrementCounter(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrementCounter(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
  },
});

export default dataSlice.reducer;
