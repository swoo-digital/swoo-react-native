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
import {Provider} from 'react-redux';
import {store} from './src/store';
import {adding, subtracting} from './src/actions';
import {useAppSelector, useDispatcher} from './src/reducers';
import styled from 'styled-components/native';

const MainScreen = () => {
  // Redux count value
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useDispatcher();

  // Increment function add the value from actions and store in redux
  const incrementCount = () => {
    dispatch(adding());
  };

  // Decrement function subtract value from actions and store in redux
  const decrementCount = () => {
    dispatch(subtracting());
  };

  return (
    <Container>
      <ContainerButtons>
        <CounterButton onPress={decrementCount}>
          <ButtonText>-1</ButtonText>
        </CounterButton>
        <CounterText>{count}</CounterText>
        <CounterButton onPress={incrementCount}>
          <ButtonText>+1</ButtonText>
        </CounterButton>
      </ContainerButtons>
    </Container>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

const Container = styled.View`
  flex:1
  justify-content: center;
  background-color: #004761;
  overflow: hidden;
`;
const ContainerButtons = styled.View`
  width: auto; /* 160px */
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
`;
const CounterButton = styled.TouchableOpacity`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 160px;
  height: auto /* 61px */;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  overflow: visible;
  border-radius: 24px;
`;

const ButtonText = styled.Text`
  flex-shrink: 0;
  width: auto;
  height: auto;
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
`;

const CounterText = styled.Text`
  flex-shrink: 0;
  width: 160px;
  height: 71px;
  font-weight: 700;
  color: #8cd6bd;
  font-size: 64px;
  letter-spacing: 0;
  text-align: center;
`;
export default App;
