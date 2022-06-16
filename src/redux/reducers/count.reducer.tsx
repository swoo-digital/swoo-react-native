import {CountActionTypes, UPDATE_COUNT } from '../types';

interface FeedState {
  counter: number
}

const initialState: FeedState = {
  counter: 0
};

export function feedReducer(state: FeedState = initialState, action: CountActionTypes): FeedState {
  switch (action.type) {
    case UPDATE_COUNT: {
      return {
        ...state,
        counter: action.payload
      };
    }
    default:
      return state
  }
};