import {createSlice} from '@reduxjs/toolkit';
import {UseCountSelector} from '../../shared';

interface ICountSate {
  count: number;
}

const initialState: ICountSate = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: state => {
      state.count++;
    },

    decrement: state => {
      if (state.count === 0) return;
      state.count--;
    },
  },
});

const getCount = () => UseCountSelector((state: RootState) => state.count);

export const countModel = {
  ...countSlice,
  selectors: {
    getCount,
  },
};
