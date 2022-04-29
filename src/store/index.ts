import {configureStore} from '@reduxjs/toolkit';
import actions from '../actions';

// Configuring redux store
export const store = configureStore({
  reducer: {
    counter: actions,
  },
});
export type MainState = ReturnType<typeof store.getState>;

// Configuring store event dispatch
export type Dispatcher = typeof store.dispatch;
