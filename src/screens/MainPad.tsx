import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {Box, CustomText as Text} from '../components/atoms';
import {Button} from '../components/molecules';
import {decrement, increment} from '../redux/reducer';

interface counterInterface {
  value: number;
}

interface Options {
  counter: counterInterface;
}

const MainPad = () => {
  const count = useSelector((state: Options) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box>
      <Button title={'-1'} onClick={() => dispatch(decrement())} />
      <Text>{count}</Text>
      <Button title={'+1'} onClick={() => dispatch(increment())} />
    </Box>
  );
};

export default MainPad;
