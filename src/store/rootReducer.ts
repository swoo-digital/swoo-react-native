import { Action, combineReducers, Reducer } from '@reduxjs/toolkit'

import counterStore, { CounterState } from './reducers/counterSlice'

interface RootState {
  counter: CounterState
}

const combinedReducer: Reducer<RootState, Action> = combineReducers({
  counter: counterStore
})

const rootReducer: Reducer<RootState, Action> = (
  state: RootState | undefined,
  action: Action
) => combinedReducer(state, action)

export default rootReducer
