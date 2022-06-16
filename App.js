import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Sources/Navigations/Routes';
import Store from './Sources/Redux/Store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
