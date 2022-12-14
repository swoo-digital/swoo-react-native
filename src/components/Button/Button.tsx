import React, {FC} from 'react';
import styled from 'styled-components/native';
import {
  layout,
  space,
  border,
  color,
  flexbox,
  typography,
  position,
} from 'styled-system';
import {TSystemStyles} from '../../types';

type TProps = {
  title: string;
  onPress: () => void;
} & TSystemStyles;

const Button: FC<TProps> = ({title, onPress, bg, color}) => {
  return (
    <SPressable
      testID="button"
      onPress={onPress}
      bg={bg}
      width="160px"
      height="61px"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      p="16px"
      overflow="visible"
      position="relative"
      alignContent="center"
      flexWrap="nowrap"
      borderRadius="24px"
      flexShrink={0}>
      <SPressableText
        color={color}
        flexShrink={0}
        width="auto"
        height="auto"
        position="relative"
        fontWeight={700}
        fontFamily="Inter-Bold"
        fontSize=" 24px"
        letterSpacing="0px">
        {title}
      </SPressableText>
    </SPressable>
  );
};

const SPressable = styled.Pressable<TSystemStyles>`
  ${flexbox}
  ${layout}
  ${space}
  ${border}
  ${color}
  ${position}
`;

const SPressableText = styled.Text<TSystemStyles>`
  ${layout}
  ${space}
  ${position}
  ${color}
  ${typography}
`;

export default Button;
