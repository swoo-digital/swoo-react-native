import React from 'react';
import styled from 'styled-components/native';
import type {TouchableOpacityProps} from 'react-native';
import {
  space,
  color,
  typography,
  SpaceProps,
  border,
  ColorProps,
  fontSize,
  fontFamily,
  fontWeight,
  type TypographyProps,
  type BorderProps,
  type FontFamilyProps,
  type FontWeightProps,
  type FontSizeProps,
} from 'styled-system';

import {UiText} from './text';

interface IProps {
  onPress: () => void;
  label: string;
}

type buttonProps = IProps &
  TouchableOpacityProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  FontFamilyProps &
  FontWeightProps &
  FontSizeProps;

type buttonStyleProps = TouchableOpacityProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  FontFamilyProps &
  FontWeightProps &
  FontSizeProps;

const StyledButton = styled.TouchableOpacity<buttonStyleProps>`
  ${space};
  ${color};
  ${typography};
  ${border};
  ${fontSize};
  ${fontFamily};
  ${fontWeight};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  background-color: ${({theme}) => theme.button};
`;

export const UIButton = ({disabled, onPress, label, ...rest}: buttonProps) => {
  return (
    <StyledButton disabled={disabled} onPress={onPress} {...rest}>
      <UiText
        fontSize={rest.fontSize}
        fontWeight={rest.fontWeight}
        fontFamily={rest.fontFamily}
        content={label}
      />
    </StyledButton>
  );
};
