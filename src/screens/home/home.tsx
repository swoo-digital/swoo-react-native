import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// components
import {Button} from 'modules/core/components';
// actions
import {decrement, increment} from 'modules/counter/redux/counter.actions';
// selectors
import {selectCounterValue} from 'modules/counter/redux/counter.selectors';

import {CounterText, ScreenRoot} from './home.styled';

const Home = () => {
  const counterValue = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  const incrementCounterValue = useCallback(() => {
    dispatch(increment(1));
  }, [dispatch]);

  const decrementCounterValue = useCallback(() => {
    dispatch(decrement(1));
  }, [dispatch]);

  return (
    <ScreenRoot>
      <Button title="-1" onPress={decrementCounterValue} />
      <CounterText>{counterValue}</CounterText>
      <Button title="+1" onPress={incrementCounterValue} />
    </ScreenRoot>
  );
};

export default Home;
