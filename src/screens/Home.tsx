import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';

import {RootState} from '../redux/store';
import {decrement, increment} from '../redux/counter/counterSlice';

import Box from '../components/Box';
import StyledText from '../components/StyledText';
import StyledButton from '../components/StyledButton';

const ButtonView = styled.View`
  flex-direction: row;
  margin-top: 24px;
`;

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const onPress = (type: string) => () => {
    if (type === 'plus') {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  };

  return (
    <Box>
      <StyledText primary fontSize="44px">
        {count}
      </StyledText>

      <ButtonView>
        <StyledButton width={'40%'} onPress={onPress('plus')}>
          <StyledText secondary>+1</StyledText>
        </StyledButton>

        <StyledButton
          width={'40%'}
          margin={'0 0 0 16px'}
          onPress={onPress('minus')}>
          <StyledText secondary>-1</StyledText>
        </StyledButton>
      </ButtonView>
    </Box>
  );
};

export default Home;
