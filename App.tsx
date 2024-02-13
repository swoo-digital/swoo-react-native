import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';

import Layout from './src/components/layout/layout-component';
import CounterScreen from './src/screens/counter/counter.screen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    console.log('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  return (
      <Layout>
        <CounterScreen />
      </Layout>
  );
};

export default App;
