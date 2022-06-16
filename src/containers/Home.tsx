import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native'
import CustomButton from '../components/CustomButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { UpdateCount } from '../redux';
export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: RootState) => state.count)
  const [count, setCount] = useState<number>(counter)
  const Onincrement = () => {
    setCount(count + 1)
  }

  const Ondecrement = () => {
    if(count !== 0){
      setCount(count - 1)
    }
    
  }

  useEffect(() => {
    dispatch(UpdateCount(count))
  }, [count])

  const Container = styled.View`
  flex: 1;
  background-color: #004761;
  align-items: center;
  justify-content: center;
`;
  const Text = styled.Text`
  flex-shrink: 0;
  font-weight: 700;
  color: #8cd6bd;
  font-size: 64px;
  text-align: center;
`;

  const CounterContainer = styled.View`
  flex: 1;
  background-color: #004761;
  align-items: center;
  max-height:500px
  justify-content: space-around;
  flexDirection: column;
`

  return (

    <>
      <Container>
        <CounterContainer>
          <CustomButton text="-1" onButtonClick={Ondecrement} />
          <Text>{count}</Text>
          <CustomButton text="+1" onButtonClick={Onincrement} />
        </CounterContainer>
      </Container>
    </>
  );
};

