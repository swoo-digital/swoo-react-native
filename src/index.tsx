import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled, {useTheme} from 'styled-components';
import CounterButton from './components/CounterButton';
import {TextBold} from './components/Typography';
import Separator from './components/Separator';
import {RootState} from './store';
import {decrement, increment} from './store/reducers/counterReducer';

const Home = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  const handleDecrease = () => {
    dispatch(decrement());
  };

  const handleIncrease = () => {
    dispatch(increment());
  };
  return (
    <Box>
      <CounterButton text="-1" onPress={handleDecrease} />
      <Separator size={104} />
      <TextBold fontSize={64} color={colors.green[0]}>
        {counter}
      </TextBold>
      <Separator size={104} />
      <CounterButton text="+1" onPress={handleIncrease} />
    </Box>
  );
};

export default Home;

const Box = styled(View)`
  background-color: ${({theme}) => theme.colors.blue[0]};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
