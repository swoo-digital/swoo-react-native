import React, {FC} from 'react';
import styled from 'styled-components/native';
import {
  layout,
  space,
  color,
  flexbox,
  typography,
  position,
} from 'styled-system';
import Button from '../Button';

import {
  asyncDecrementCreator,
  asyncIncrementCreator,
} from '../../store/countReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {TSystemStyles} from '../../types';

const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.count.count);

  const handleIncrement = () => {
    dispatch(asyncIncrementCreator());
  };

  const handleDecrement = () => {
    dispatch(asyncDecrementCreator());
  };

  return (
    <SContainer
      width={'100%'}
      height={'100%'}
      bg="teal"
      alignItems={'center'}
      justifyContent={'center'}
      overflow={'hidden'}>
      <SRow
        width={'160px'}
        height={'400px'}
        overflow="visible"
        p={'0px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={'column'}
        alignContent={'center'}
        flexWrap={'nowrap'}>
        <Button title="+1" onPress={handleIncrement} bg="white" color="black" />
        <SCount
          width="160px"
          height="71px"
          color="lightGreen"
          fontWeight={700}
          fontFamily={'Inter-Bold'}
          fontSize={'64px'}
          letterSpacing={'0px'}
          textAlign={'center'}
          position={'relative'}
          flexShrink={0}>
          {count}
        </SCount>
        <Button title="+1" onPress={handleDecrement} bg="white" color="black" />
      </SRow>
    </SContainer>
  );
};

const SContainer = styled.View<TSystemStyles>`
  ${layout}
  ${color}
  ${flexbox}
`;

const SRow = styled.View<TSystemStyles>`
  ${layout}
  ${space}
  ${flexbox}
`;

const SCount = styled.Text<TSystemStyles>`
  ${layout}
  ${color}
  ${typography}
  ${position}
`;

export default Counter;
