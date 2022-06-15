import { createStore, combineReducers } from 'redux'

//Auth
import CounterReducer from './src/reducer/counterReducer'


const AppReducer = combineReducers({
    counterReducer: CounterReducer,
});

export const store = createStore(AppReducer);


