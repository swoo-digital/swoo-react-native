import React from 'react';
import styled from 'styled-components/native';
import type {TextProps} from 'react-native';
import {
  space,
  color,
  typography,
  fontSize,
  fontFamily,
  fontWeight,
  type SpaceProps,
  type ColorProps,
  type SizeProps,
  type FontFamilyProps,
  type FontWeightProps,
  type FontSizeProps,
} from 'styled-system';

interface IProps {
  content: string | number;
}

type textProps = IProps &
  TextProps &
  SpaceProps &
  ColorProps &
  SizeProps &
  FontSizeProps &
  FontFamilyProps &
  FontWeightProps;

type styledTextProps = TextProps &
  SpaceProps &
  ColorProps &
  SizeProps &
  FontSizeProps &
  FontFamilyProps &
  FontWeightProps;

const StyledText = styled.Text<styledTextProps>`
  ${space};
  ${color};
  ${typography};
  ${fontSize};
  ${fontFamily};
  ${fontWeight};
  color: ${({theme, color: textColor}) => (textColor ? textColor : theme.text)};
`;

export const UiText = ({content, ...rest}: textProps) => {
  return <StyledText {...rest}>{content}</StyledText>;
};
