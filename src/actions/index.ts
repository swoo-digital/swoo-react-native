import {createSlice} from '@reduxjs/toolkit';

interface Counter {
  value: number;
}
const initialState: Counter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    adding: count => {
      count.value += 1;
    },
    subtracting: count => {
      count.value -= 1;
    },
  },
});

export const {adding, subtracting} = counterSlice.actions;

export default counterSlice.reducer;
