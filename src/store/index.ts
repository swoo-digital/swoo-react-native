import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import countReducer from './countReducer';
import {rootWatcher} from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  count: countReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
