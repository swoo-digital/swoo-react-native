import React from 'react';
import Box from '../components/Box';
import Counter from '../components/Counter';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.bg.navy};
`;

function CounterScreen() {
  const count = useAppSelector(state => state.counter.counter);
  const dispatch = useAppDispatch();

  const onPressAdd = () => {
    dispatch({type: 'counter/add'});
  };

  const onPressSubtract = () => {
    dispatch({type: 'counter/subtract'});
  };

  return (
    <ScreenContainer>
      <Box>
        <Button title="+1" onPress={onPressAdd} testID="addButton" />
        <Counter amount={count} testID="counter" />
        <Button title="-1" onPress={onPressSubtract} testID="subtractButton" />
      </Box>
    </ScreenContainer>
  );
}

export default CounterScreen;
