import {createSelector} from '@reduxjs/toolkit';
// types
import type {State} from 'services/redux/reducers';
import type {CounterState} from 'modules/counter/redux/counter.reducers';

export const selectCounterValue = createSelector(
  (state: State) => state.counter,
  (counter: CounterState) => counter.value,
);
