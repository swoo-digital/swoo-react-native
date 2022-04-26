import {configureStore} from '@reduxjs/toolkit';
// reducers
import reducer from './reducers';

const store = configureStore({reducer});

export default store;
