import {CounterState} from './reducer';

export const incrementHandler = (state: CounterState) => {
  state.value += 1;
};

export const decrementHandler = (state: CounterState) => {
  state.value -= 1;
};
