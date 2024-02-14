import React from 'react';
import {Provider} from 'react-redux';
import Layout from './src/ui/components/layout/layout.component';
import CounterScreen from './src/screens/counter/counter.screen';
import {store} from './src/store/store';
import ThemeProvider from './src/ui/theme/theme-provider';

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Layout>
          <CounterScreen />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
