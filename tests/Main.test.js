import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import Counter from '../src/screens/Counter';
import {store} from '../store/store';

export function renderWithRedux(component) {
  return render(<Provider store={store}>{component}</Provider>);
}

describe('Testing Counder screen', () => {
  it('render the counter correctly', () => {
    renderWithRedux(<Counter />);
  });
  it('Should render count value', () => {
    const {getByTestId} = renderWithRedux(<Counter />);
    const countText = getByTestId('value');
    expect(countText).toBeDefined();
  });
  it('Should render increment component', () => {
    const {getByTestId} = renderWithRedux(<Counter />);
    const incement = getByTestId('increment');
    expect(incement).toBeDefined();
  });
  it('Should init value is 0', () => {
    const state = store.getState().counter.value;
    expect(state).toEqual(0);
  });
  it('Should render decrement component', () => {
    const {getByTestId} = renderWithRedux(<Counter />);
    const decrement = getByTestId('decrement');
    expect(decrement).toBeDefined();
  });
  it('Should increment value on press', () => {
    const {getByTestId} = renderWithRedux(<Counter />);
    let state = store.getState().counter.value;
    const countText = getByTestId('value');
    const increment = getByTestId('increment');
    fireEvent.press(increment);
    expect(countText.props.children).toEqual(state + 1);
  });
  it('Should decrement value on press', () => {
    const {getByTestId} = renderWithRedux(<Counter />);
    const countText = getByTestId('value');
    let state = store.getState().counter.value;
    const decrement = getByTestId('decrement');
    fireEvent.press(decrement);
    expect(countText.props.children).toEqual(state - 1);
  });
});
