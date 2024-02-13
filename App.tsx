import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import Layout from './src/components/layout/layout.component';
import CounterScreen from './src/screens/counter/counter.screen';
import {store} from './src/store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    console.log('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <Provider store={store}>
      <Layout>
        <CounterScreen />
      </Layout>
    </Provider>
  );
};

export default App;
