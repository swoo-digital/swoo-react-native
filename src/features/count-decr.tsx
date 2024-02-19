import React from 'react';
import {countModel} from '../entities';
import {UIButton, UseCountDispatch} from '../shared';

export const CountDecrement = () => {
  const dispatch = UseCountDispatch();

  const count = countModel.selectors.getCount();
  const isZero = count === 0;

  const onClickDecrement = () => {
    dispatch(countModel.actions.decrement());
  };

  return (
    <UIButton
      onPress={onClickDecrement}
      label="-1"
      p="16px 68px"
      borderRadius="20px"
      fontSize="24px"
      fontWeight="bold"
      disabled={isZero}
    />
  );
};
