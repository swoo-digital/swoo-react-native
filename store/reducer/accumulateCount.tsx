export enum UserActionType {
  SET_INCREASE = ' SET_INCREASE ',
  SET_DECREASE = ' SET_DECREASE ',
}

export type UserActions = decreaseProps | increaseProps;

interface decreaseProps {
  type: UserActionType.SET_INCREASE;
  payload: number;
}

interface increaseProps {
  type: UserActionType.SET_DECREASE;
  payload: number;
}

interface initialState {
  count: number;
}

const defaultState: initialState = {
  count: 0,
};

export default function accumulateCount(
  state = defaultState,
  action: UserActions,
) {
  switch (action.type) {
    case UserActionType.SET_INCREASE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case UserActionType.SET_DECREASE:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}
