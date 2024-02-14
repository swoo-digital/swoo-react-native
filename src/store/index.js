import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../store/features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
