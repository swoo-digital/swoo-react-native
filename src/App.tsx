import React from 'react';
// screens
import Home from 'screens/home';
// providers
import {ReduxProvider} from 'modules/core/providers/redux-provider/redux-provider';

import {Root} from './App.styled';

const App = () => {
  return (
    <ReduxProvider>
      <Root>
        <Home />
      </Root>
    </ReduxProvider>
  );
};
export default App;
