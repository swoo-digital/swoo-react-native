import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Counter {
  countRedux: number;
}

const initialState: Counter = {
  countRedux: 0,
};

export const dataSlice = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    counter(state, action: PayloadAction<number>) {
      state.countRedux += action.payload;
    },
  },
});

export default dataSlice.reducer;
