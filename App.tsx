import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import Box from './src/components/Box';
import {store} from './src/store/store';
import theme from './src/theme/theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
