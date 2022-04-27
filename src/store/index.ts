import {configureStore} from '@reduxjs/toolkit';
import actions from '../actions';

export const store = configureStore({
  reducer: {
    counter: actions,
  },
});
export type MainState = ReturnType<typeof store.getState>;

export type Dispatcher = typeof store.dispatch;
