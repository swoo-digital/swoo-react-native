import React from 'react';
import styled from 'styled-components/native';

const StyledCounterText = styled.Text`
  color: ${props => props.theme.colors.text.mint};
  font-size: ${props => props.theme.fontSizes.xxl};
  text-align: center;
  font-family: ${props => props.theme.fonts.bold};
  margin: 104px 0;
`;

type CounterProps = {
  amount: number;
  testID?: string;
};

const Counter = ({amount, testID}: CounterProps) => {
  return <StyledCounterText testID={testID}>{amount}</StyledCounterText>;
};

export default Counter;
