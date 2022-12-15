import React from 'react';
import BackGround from '../components/styledComponents/styledBackground';
import Button from '../components/Button';
import Title from '../components/Title';
import StyledView from '../components/styledComponents/styledView';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {decrement, increment} from '../../store/reducers/counterSlice';

const Counter = () => {
  const dispatch = useAppDispatch();
  return (
    <BackGround>
      <StyledView flex={1}>
        <Button
          testID="decrement"
          onPress={() => dispatch(decrement())}
          text="-1"
        />
        <Title testID="value" />
        <Button
          testID="increment"
          onPress={() => dispatch(increment())}
          text="+1"
        />
      </StyledView>
    </BackGround>
  );
};

export default Counter;
