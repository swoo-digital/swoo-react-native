import {configureStore} from '@reduxjs/toolkit';
import {countModel} from '../entities';

export const store = configureStore({
  reducer: countModel.reducer,
});
