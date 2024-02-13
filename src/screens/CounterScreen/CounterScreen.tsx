import React, {useState} from 'react';
import {Box} from '../../components/Box';
import {PressableButton} from '../../components/PressableButton';
import {Counter} from '../../components/Counter';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  const decrement = () => setCount(prev => prev - 1);

  return (
    <Box>
      <PressableButton title="- 1" onPress={increment} />
      <Counter>{count}</Counter>
      <PressableButton title="+ 1" onPress={decrement} />
    </Box>
  );
};
