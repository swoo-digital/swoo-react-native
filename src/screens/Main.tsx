/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Touchable } from '../components/touchable';
import { Text, ValueText } from '../components/text';
import { Box } from '../components/box';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { decrement, increment } from '../redux/slice/counterSlice';

export const Main = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Box>
      <Touchable onPress={() => dispatch(increment())}>
        <ValueText>
          +1
        </ValueText>
      </Touchable>
      <Text>
        {count}
      </Text>
      <Touchable onPress={() => dispatch(decrement())}>
        <ValueText>
          -1
        </ValueText>
      </Touchable>
    </Box>
  );
};
