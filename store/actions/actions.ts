import {Dispatch} from 'redux';
import {UserActions, UserActionType} from '../reducer/accumulateCount';

export const set_increase = (count: number) => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: UserActionType.SET_INCREASE,
      payload: count,
    });
  };
};

export const set_decrease = (count: number) => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({
      type: UserActionType.SET_DECREASE,
      payload: count,
    });
  };
};
