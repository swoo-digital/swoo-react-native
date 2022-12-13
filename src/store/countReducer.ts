type TCountState = {
  count: number;
};

type TIncrementAction = {
  type: 'INCREMENT' | 'ASYNC_INCREMENT';
};

type TDecrementAction = {
  type: 'DECREMENT' | 'ASYNC_DECREMENT';
};

type TCountActionType = TIncrementAction | TDecrementAction;

const defaultState = {
  count: 0,
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT';

export default function countReducer(
  state = defaultState,
  action: TCountActionType,
): TCountState {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
  }
  return state;
}

export const incrementCreator = () => ({type: INCREMENT});
export const decrementCreator = () => ({type: DECREMENT});
export const asyncIncrementCreator = (): TIncrementAction => ({type: ASYNC_INCREMENT});
export const asyncDecrementCreator = (): TDecrementAction => ({type: ASYNC_DECREMENT});
