import React from 'react';
import {Box} from '../../components/Box';
import {PressableButton} from '../../components/PressableButton';

export const CounterScreen = () => {
  return (
    <Box>
      <PressableButton title="-1" onPress={() => console.log('increment')} />

      {/* <Counter>{counter}</Counter> */}
      <PressableButton title="+1" onPress={() => console.log('decrement')} />
    </Box>
  );
};
