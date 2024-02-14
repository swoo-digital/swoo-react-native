import React from 'react';
import CounterScreen from './src/screens/CounterScreen';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => (
  <Provider store={store}>
    <CounterScreen />
  </Provider>
);

export default App;
