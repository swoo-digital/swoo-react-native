import { UPDATE_COUNT, CountActionTypes } from '../types';
import { ActionCreator } from 'redux';

const updateStoredFeedSuccess: ActionCreator<CountActionTypes> = (count: number) => {
  return { type: UPDATE_COUNT, payload: count };
}

export function UpdateCount(count:number) {
  return dispatch => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    return dispatch(updateStoredFeedSuccess(count))
  }
}


