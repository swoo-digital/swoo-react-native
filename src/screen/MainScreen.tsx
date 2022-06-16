import React, {FC, ReactElement} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Box, ValueText as Text, Button} from '../components';
import {decrement, increment} from '../redux/reducer';

interface counterInterface {
  value: number;
}

interface Options {
  counter: counterInterface;
}

const MainScreen: FC = (): ReactElement => {
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

export default MainScreen;
