import { createStore, combineReducers } from 'redux';

import counterReducer from './reducers/countReducer';
const rootReducer = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducer);
export default store;