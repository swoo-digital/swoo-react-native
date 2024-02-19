import React from 'react';
import {UIButton, UseCountDispatch} from '../shared';
import {countModel} from '../entities';

export const CountIncrement = () => {
  const dispatch = UseCountDispatch();

  const onClickIncrement = () => {
    dispatch(countModel.actions.increment());
  };

  return (
    <UIButton
      onPress={onClickIncrement}
      label="+1"
      p="16px 68px"
      borderRadius="20px"
      fontSize="24px"
      fontWeight="bold"
    />
  );
};
