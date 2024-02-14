import React from 'react';
import {
  decreamentCounter,
  increamentCounter,
} from '../store/features/counterSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Box} from '../components/Box';
import {Touchable} from '../components/Touchable';
import {BtnText, Text} from '../components/Text';
import {SafeAreaView} from 'react-native';
import {colors} from '../utils/colors';

const CounterScreen = () => {
  const dispatch = useDispatch();
  const {value} = useSelector(store => store.counter);

  return (
    <SafeAreaView style={{backgroundColor: colors.bg}}>
      <Box>
        <Touchable onPress={() => dispatch(increamentCounter())}>
          <BtnText>+1</BtnText>
        </Touchable>
        <Text>{value}</Text>
        <Touchable onPress={() => dispatch(decreamentCounter())}>
          <BtnText>-1</BtnText>
        </Touchable>
      </Box>
    </SafeAreaView>
  );
};

export default CounterScreen;
