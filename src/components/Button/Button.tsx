import React, {FC} from 'react';
import styled from 'styled-components/native';

type TProps = {
  title: string;
  onPress: () => void;
};

const Button: FC<TProps> = ({title, onPress}) => {
  return (
    <SPressable onPress={onPress}>
      <SPressableText>{title}</SPressableText>
    </SPressable>
  );
};

const SPressable = styled.Pressable`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 160px;
  height: 61px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 24px;
`;

const SPressableText = styled.Text`
  flex-shrink: 0;
  width: auto;
  height: auto;
  position: relative;
  font-weight: 700;
  font-family: 'Inter-Bold';
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
`;

export default Button;
