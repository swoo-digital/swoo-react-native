import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        resetCounter: (state) => {
            state.value = 0;
        },
    }
});

export const {increment, decrement, resetCounter} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
