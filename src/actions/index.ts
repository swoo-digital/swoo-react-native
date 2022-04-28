import {createSlice} from '@reduxjs/toolkit';

interface Counter {
  value: number;
}
// Initial values of redux global state
const initialState: Counter = {
  value: 0,
};

// using create slice function of redux toolkit storing initial value and adding and subtracting function
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

// Exporting function of increment and decrement from counterSlice
export const {adding, subtracting} = counterSlice.actions;

export default counterSlice.reducer;
