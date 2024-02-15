import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    add(state) {
      state.counter += 1;
    },
    subtract(state) {
      state.counter -= 1;
    },
  },
});

export default counterSlice.reducer;
