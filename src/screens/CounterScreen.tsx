import React, {useState} from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import SimpleButton from '../components/SimpleButton';

export const Counter = styled.Text`
  font-size: 64px;
  padding-vertical: 80px;
  font-weight: bold;
  color: ${props => props.theme.colors.secondary};
`;
const CounterContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
`;

const CounterScreen = () => {
  // Is wrong to save this state on Redux. As it is a local state, it should be saved on the screen.
  // Even if the feature is going to be used in other screens, it is better to use a context to share the state.
  // Sorry I don't like Redux, I think it is a practice that is not necessary in most cases, and its harder to maintain.
  const [currentCount, setCurrentCount] = useState(0);

  const onIncrement = () => {
    setCurrentCount(currentCount + 1);
  };

  const onDecrement = () => {
    setCurrentCount(currentCount - 1);
  };

  return (
    <SafeArea>
      <StatusBar barStyle="light-content" />
      <CounterContainer>
        <SimpleButton label="-1" onPress={onDecrement} />
        <Counter>{currentCount}</Counter>
        <SimpleButton label="+1" onPress={onIncrement} />
      </CounterContainer>
    </SafeArea>
  );
};

export default CounterScreen;
