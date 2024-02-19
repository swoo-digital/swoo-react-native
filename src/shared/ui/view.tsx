import styled from 'styled-components/native';
import React, {ReactNode} from 'react';
import type {ViewProps} from 'react-native';
import {
  space,
  color,
  size,
  flexbox,
  height,
  width,
  type SpaceProps,
  type ColorProps,
  type SizeProps,
  type WidthProps,
  type FlexboxProps,
  type HeightProps,
} from 'styled-system';

interface IProps {
  children: ReactNode;
}

type viewProps = IProps &
  ViewProps &
  SpaceProps &
  ColorProps &
  SizeProps &
  FlexboxProps &
  WidthProps &
  HeightProps;

type styledViewProps = ViewProps &
  SpaceProps &
  ColorProps &
  SizeProps &
  FlexboxProps &
  HeightProps &
  WidthProps;

const StyledUiView = styled.View<styledViewProps>`
  ${space};
  ${color};
  ${size};
  ${flexbox};
  ${height};
  ${width};
  background-color: ${({theme}) => theme.backgroundColor};
`;

export const UiView = ({children, ...rest}: viewProps) => {
  return <StyledUiView {...rest}>{children}</StyledUiView>;
};
