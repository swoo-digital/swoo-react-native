import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

const CounterValue: React.FC<{children: React.ReactNode}> = ({children}) => {
  const Value = styled.Text`
    color: #8cd6bd;
    font-size: 64px;
    font-weight: bold;
  `;
  return (
    <View>
      <Value>{children}</Value>
    </View>
  );
};

export default CounterValue;
