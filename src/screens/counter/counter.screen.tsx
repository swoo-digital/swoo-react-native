import React from 'react';
import CounterComponent from './counter.component';
import useCounterState from '../../hooks/useCounterState.hook';

const CounterScreen = () => {
  const {counter, increment, decrement} = useCounterState();

  return (
    <CounterComponent
      counter={counter}
      increment={increment}
      decrement={decrement}
    />
  );
};

export default CounterScreen;
