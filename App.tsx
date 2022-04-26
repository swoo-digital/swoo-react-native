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
      <PressableButton title="+1" onPress={onIncreaseCount} />
      <Text>{count}</Text>
      <PressableButton title="-1" onPress={onDecreaseCount} />
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
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  padding: 12px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
`;

export default App;
