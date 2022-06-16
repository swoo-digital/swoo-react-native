import {createSlice} from '@reduxjs/toolkit';

interface Counter {
  value: number;
}
// Initial values of redux global state
const initialState: Counter = {
  value: 0,
};

// using create slice function of redux toolkit storing initial value and adding and subtracting function
export const counterFunc = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: count => {
      count.value += 1;
    },
    subtract: count => {
      count.value -= 1;
    },
  },
});

// Exporting function of increment and decrement from counterSlice
export const {add, subtract} = counterFunc.actions;

export default counterFunc.reducer;
