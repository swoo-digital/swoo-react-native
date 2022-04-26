import React, {FC} from 'react';

import {StyledButton, ButtonTitle} from './button.styled';
import type {ButtonInterface} from './button.interface';

export const Button: FC<ButtonInterface> = ({
  title,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <StyledButton style={style} onPress={onPress}>
      <ButtonTitle style={textStyle}>{title}</ButtonTitle>
    </StyledButton>
  );
};
