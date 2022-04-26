import {combineReducers} from '@reduxjs/toolkit';
// reducers
import {
  counterReducer,
  CounterState,
} from 'modules/counter/redux/counter.reducers';

export type State = Readonly<{
  counter: CounterState;
}>;

const appReducer = combineReducers<State>({
  counter: counterReducer,
});

export default appReducer;
