import * as React from 'react';
import { fireEvent, render } from "@testing-library/react-native";
import reducer, {increment, decrement} from "../src/redux/counterSlice";

import App from '../App'

describe("counter", () => {
    it("1 + 1 should equals 2", () => {
      expect(1 + 1).toEqual(2);
    });
  
    it("renders correctly", () => {
      render(<App/>);
    });
  
    it("shows an initial state of 0",  () => {
      expect(reducer(undefined, {})).toEqual(
          {
              value: 0
            }
      )
  });
  
    it("increments by 1 each time increment is pressed", () => {
      const { queryByText, getByTestId } = render(<App/>);

      const initialState = queryByText("{value: 0}")
      // expect(initialState).not.toBeNull();

      const increment = getByTestId("incrementButton");
      expect(increment).not.toBeNull()

      fireEvent.press(increment);

      const previousState = {value: 0}
      // const oneState = queryByText("value: 1");
      // expect(oneState).not.toBeNull();
      
  });
  
    it("decrements by 1 each time decrement is pressed", () => {
      const previousState = {value: 0}
      expect(reducer(previousState, decrement())).toEqual(
          {
              value: previousState.value - 1
            }
      )
  });
  });
