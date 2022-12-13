import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import store from '../redux/store';
import Counter from '../screens/MainPad';

afterEach(cleanup);

const renderCounter = () =>
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );

describe('Counter', () => {
  it('should show +1 button', () => {
    const btnIncrement = '+1';

    const {getByText} = renderCounter();

    const foundBtnIncrement = getByText(btnIncrement);

    expect(foundBtnIncrement).toBeTruthy();
  });

  it('should show -1 button', () => {
    const btnDecrement = '-1';

    const {getByText} = renderCounter();

    const foundBtnDecrement = getByText(btnDecrement);

    expect(foundBtnDecrement).toBeTruthy();
  });

  it('should show count text', () => {
    const countText = 'countText';

    const {getByTestId} = renderCounter();

    const foundCountText = getByTestId(countText);

    expect(foundCountText).toBeTruthy();
  });

  it('should increment the count on +1 press', () => {
    const btnIncrement = '+1';
    const countText = 'countText';
    let state = store.getState().counter;
    const count = state.value;

    const {getByTestId, getByText} = renderCounter();

    const foundButton = getByText(btnIncrement);

    fireEvent.press(foundButton);

    const foundCountText = getByTestId(countText);
    expect(foundCountText.props.children).toEqual(count + 1);
  });

  it('should show decrement the count on -1 press', () => {
    const btnIncrement = '-1';
    const countText = 'countText';
    let state = store.getState().counter;
    const count = state.value;

    const {getByTestId, getByText} = renderCounter();

    const foundButton = getByText(btnIncrement);

    fireEvent.press(foundButton);

    const foundCountText = getByTestId(countText);
    expect(foundCountText.props.children).toEqual(count - 1);
  });
});
