/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';


import { store } from './src/redux/store';

const Route = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
