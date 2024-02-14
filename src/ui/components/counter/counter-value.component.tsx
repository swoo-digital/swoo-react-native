import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import useTheme from '../../../hooks/useTheme.hook';

const CounterValue: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme = useTheme();
  const Value = styled.Text`
    color: ${theme.theme.colors.primary};
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
