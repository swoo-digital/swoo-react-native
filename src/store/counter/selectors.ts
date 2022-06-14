import {RootState} from '../store';

export const stateCounter = (state: RootState): number => state.counter.value;
