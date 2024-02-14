import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    decreamentCounter: state => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    increamentCounter: state => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increamentCounter, decreamentCounter} = counterSlice.actions;

export default counterSlice.reducer;
