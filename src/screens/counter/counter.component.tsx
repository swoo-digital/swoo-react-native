import React from 'react';
import styled from 'styled-components/native';
import CounterValue from '../../components/counter/counter-value.component';
import CounterOperation from "../../components/counter/counter-operation.component";

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
        <CounterOperation title={'+1'} func={increment} />
        <CounterValue>{counter}</CounterValue>
        <CounterOperation title={'-1'} func={decrement} />
      </CounterContainer>
    </CenteredContainer>
  );
};

export default CounterComponent;
