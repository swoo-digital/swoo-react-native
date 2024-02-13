import React from 'react';
import {CounterButtonProps} from './types';
import {ButtonContainer} from './styles';
import {TextBold} from '../Typography';

const CounterButton = (props: CounterButtonProps) => {
  const {text, onPress, ...rest} = props;
  return (
    <ButtonContainer onPress={onPress} {...rest}>
      <TextBold fontSize={24}>{text}</TextBold>
    </ButtonContainer>
  );
};

export default CounterButton;
