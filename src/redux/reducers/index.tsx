import { combineReducers } from 'redux';
import { feedReducer } from './count.reducer';

export const rootReducer = combineReducers({
  count: feedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;