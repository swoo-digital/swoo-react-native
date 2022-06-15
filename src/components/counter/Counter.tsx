import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {decrement, increment} from './slice';
import styled from 'styled-components/native';

const Container = styled.View`
  backgroundColor: #004761;
  height: 100%;
  width: 100%;
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

const CounterText = styled.Text`
  color: #8cd6bd;
  fontSize: 64px;
  fontWeight: 700;
  fontFamily: Inter-Bold;
  marginTop: 104px;
  marginBottom: 104px;
`;

const CounterButtonText = styled.Text`
  fontSize: 24px;
  fontWeight: 700;
  textAlign: center;
`;

const CounterButton = styled.View`
  backgroundColor: #ffffff;
  padding: 16px;
  borderRadius: 24px;
  width: 160px;
`;

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <CounterButton>
        <TouchableNativeFeedback
          onPress={() => dispatch(decrement())}
          data-testid="button-decrement">
          <CounterButtonText>-1</CounterButtonText>
        </TouchableNativeFeedback>
      </CounterButton>
      <CounterText data-testid="counter-value">{count}</CounterText>
      <CounterButton>
        <TouchableNativeFeedback
          onPress={() => dispatch(increment())}
          data-testid="button-increment">
          <CounterButtonText>+1</CounterButtonText>
        </TouchableNativeFeedback>
      </CounterButton>
    </Container>
  );
};

export default Counter;
