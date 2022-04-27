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
import {Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {adding, subtracting} from './src/actions';
import {useAppSelector, useDispatcher} from './src/reducers';
import styled from 'styled-components/native';

const MainScreen = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useDispatcher();

  const incrementCount = () => {
    dispatch(adding());
  };

  const decrementCount = () => {
    dispatch(subtracting());
  };

  return (
    <Container>
      <Button title="Increment" onPress={incrementCount} />
      <Text>{count}</Text>
      <Button title="Decrement" onPress={decrementCount} />
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
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export default App;
