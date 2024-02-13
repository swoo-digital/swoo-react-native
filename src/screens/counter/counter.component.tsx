import React from 'react';
import styled from 'styled-components/native';
import IncreaseComponent from '../../components/counter/increase.component';
import DecreaseComponent from '../../components/counter/decrease.component';

const CounterComponent = () => {
  const CenteredContainer = styled.View`
    display: grid;
    place-content: center;
  `;

  const CounterContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const CounterValue = styled.Text`
    color: #8cd6bd;
    font-size: 64px;
    line-height: 1.2;
  `;

  return (
    <CenteredContainer>
      <CounterContainer>
        <IncreaseComponent increase={() => console.log('increase')} />
        <CounterValue>0</CounterValue>
        <DecreaseComponent decrease={() => console.log('decrease')} />
      </CounterContainer>
    </CenteredContainer>
  );
};

export default CounterComponent;
