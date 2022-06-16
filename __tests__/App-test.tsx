import React from 'react';
import { render } from "@testing-library/react-native";
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = { counter: 10 };
    const mockStore = configureStore();
    let store;

    it('Shows "Hello world!"', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

    });
});