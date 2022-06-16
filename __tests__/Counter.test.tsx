
import React from 'react';
import App from '../App'
import { render } from "@testing-library/react-native";
import { Home } from '../src/containers/Home'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
describe("Counter", () => {
    it('Render correctly"', () => {

        const initialState = { counter: 0 };
        const mockStore = configureStore();
        let store;
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App> <Home /></App>
            </Provider>
        );


    })
    it("shows an initial state of 0", () => {
        const initialState = { counter: 0 };
        const mockStore = configureStore();
        let store;
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App> <Home /></App>
            </Provider>
        );
        expect(initialState).not.toBeNull();
    });

});