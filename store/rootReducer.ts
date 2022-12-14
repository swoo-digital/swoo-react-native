import {combineReducers} from '@reduxjs/toolkit';
import counterSlice from './reducers/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export default rootReducer;
