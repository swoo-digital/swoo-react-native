import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
const Container = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const CounterScreen = () => {
  return (
    <Container>
      <Text style={{color: 'red'}}>Counter Screen</Text>
    </Container>
  );
};
