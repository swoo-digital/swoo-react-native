import React from 'react';
import counterReducer from '../src/reducer/counterReducer'
import actiontypes from '../src/reducer/constants'

it('should return the initial state when pass empty action', () => {
    const countReducer = counterReducer({ counterValue: 0 }, { })
    expect(countReducer).toEqual({ counterValue: 0 })
});

it('should return the state value by increment one', () => {
    const countReducer = counterReducer({ counterValue: 0 }, { type: actiontypes.COUNTER_INCREMENT })
    expect(countReducer).toEqual({ counterValue: 1 })
});

it('should return the state value by decrement one', () => {
    const countReducer = counterReducer({ counterValue: 0 }, { type: actiontypes.COUNTER_DECREMENT })
    expect(countReducer).toEqual({ counterValue: -1 })
});