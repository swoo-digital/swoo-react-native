import React from 'react';
import {add, subtract} from '../../actions';
import {useAppSelector, useDispatcher} from '../../reducers';
import {
  ButtonText,
  Container,
  ContainerButtons,
  CounterButton,
  CounterText,
} from './MainScreenStyle';

export const MainScreen = () => {
  // Redux count value
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useDispatcher();

  // Increment function add the value from actions and store in redux
  const incrementCount = () => {
    dispatch(add());
  };

  // Decrement function subtract value from actions and store in redux
  const decrementCount = () => {
    dispatch(subtract());
  };

  return (
    <Container>
      <ContainerButtons>
        <CounterButton testID="minusButton" onPress={decrementCount}>
          <ButtonText>-1</ButtonText>
        </CounterButton>
        <CounterText>{count}</CounterText>
        <CounterButton testID="addButton" onPress={incrementCount}>
          <ButtonText>+1</ButtonText>
        </CounterButton>
      </ContainerButtons>
    </Container>
  );
};
