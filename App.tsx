import React from 'react';
import {CounterPage} from './src/pages/CounterPage';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/common/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CounterPage/>
            </Provider>
        </ThemeProvider>
    );
};


export default App;
