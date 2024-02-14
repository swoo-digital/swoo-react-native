import React from 'react';
import {Provider} from 'react-redux';
import Layout from './src/components/layout/layout.component';
import CounterScreen from './src/screens/counter/counter.screen';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <CounterScreen />
      </Layout>
    </Provider>
  );
};

export default App;
