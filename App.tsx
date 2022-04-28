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
import styled from 'styled-components/native';
import {Provider} from 'react-redux';

import {store} from './src/store';
import {increment, decrement} from './src/features/counter/counterSlice';
import {useAppSelector, useAppDispatch} from './src/hooks';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

const PressableButton = ({onPress, title}: ButtonProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const onIncreaseCount = () => {
    dispatch(increment());
  };

  const onDecreaseCount = () => {
    dispatch(decrement());
  };

  return (
    <Container>
      <StackContainer>
        <PressableButton title="-1" onPress={onDecreaseCount} />
        <Text>{count}</Text>
        <PressableButton title="+1" onPress={onIncreaseCount} />
      </StackContainer>
    </Container>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #004761;
  justify-content: center;
`;

const StackContainer = styled.View`
  height: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-size: 64px;
  font-weight: 700;
  color: #8cd6bd;
`;

const ButtonContainer = styled.TouchableOpacity`
  width: 160px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 24px;
`;

const ButtonText = styled.Text`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export default App;
