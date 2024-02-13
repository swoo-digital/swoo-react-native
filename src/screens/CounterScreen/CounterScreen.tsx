import React from 'react';
import {Box} from '../../components/Box';
import {PressableButton} from '../../components/PressableButton';
import {Counter} from '../../components/Counter';

export const CounterScreen = () => {
  return (
    <Box>
      <PressableButton title="- 1" onPress={() => console.log('increment')} />

      <Counter>{1}</Counter>
      <PressableButton title="+ 1" onPress={() => console.log('decrement')} />
    </Box>
  );
};
