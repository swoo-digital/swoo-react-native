import React, {FC} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import styled from 'styled-components/native';
import {color} from 'styled-system';

import ButtonWithStyles from './Button';

import {stateCounter} from '../store/counter/selectors';
import {increment, decrement} from '../store/counter/reducer';
import {useAppSelector, useAppDispatch} from '../store/store';

interface IStyledProps {
  color?: string;
  bg?: string;
}

const Box = styled.SafeAreaView<IStyledProps>`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  ${color}
`;

const Text = styled.Text<IStyledProps>`
  font-size: 64px;
  ${color}
`;

const BoxWithStyles: FC = () => {
  const counter = useAppSelector(stateCounter);
  const dispatch = useAppDispatch();

  const isDarkMode = useColorScheme() === 'dark';

  const incrementCounterHandler = () => dispatch(increment());
  const decrementCounterhandler = () => dispatch(decrement());

  return (
    <Box bg={isDarkMode ? 'primary_dark_bg' : 'primary_light_bg'}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <ButtonWithStyles title="-1" onPress={decrementCounterhandler} />
      <Text color={isDarkMode ? 'primary_dark_text' : 'primary_light_text'}>
        {counter}
      </Text>
      <ButtonWithStyles title="+1" onPress={incrementCounterHandler} />
    </Box>
  );
};

export default BoxWithStyles;
