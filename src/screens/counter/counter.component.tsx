import React from 'react';
import styled from 'styled-components/native';
import IncreaseComponent from '../../components/counter/increase.component';
import DecreaseComponent from '../../components/counter/decrease.component';
import CounterValue from '../../components/counter/counter-value.component';

const CounterComponent: React.FC<{
  counter: number;
  increment: () => void;
  decrement: () => void;
}> = ({counter, increment, decrement}) => {
  const CenteredContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;

  const CounterContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 40%;
  `;

  return (
    <CenteredContainer>
      <CounterContainer>
        <IncreaseComponent increase={increment} />
        <CounterValue>{counter}</CounterValue>
        <DecreaseComponent decrease={decrement} />
      </CounterContainer>
    </CenteredContainer>
  );
};

export default CounterComponent;
