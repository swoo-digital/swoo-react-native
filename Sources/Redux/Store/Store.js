import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from '../Slices';

const Store = configureStore({
  reducer: { CounterReducer },
});

export default Store;
