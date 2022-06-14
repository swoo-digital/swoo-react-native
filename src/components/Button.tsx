import React, {FC} from 'react';
import styled from 'styled-components/native';
import {space} from 'styled-system';

interface IButton {
  title: string;
  onPress: () => void;
}

interface IStyledProps {
  p?: number[];
}

const Button = styled.TouchableOpacity<IStyledProps>`
  ${space}
  width: 168px;
  border-radius: 24px;
  background-color: #fff;
  align-items: center;
`;

const ButtonTitle = styled.Text`
  font-weight: 700;
  color: #000000;
  font-size: 24px;
`;

const ButtonWithStyles: FC<IButton> = ({title, onPress}) => {
  return (
    <Button p={[3]} onPress={onPress}>
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
};

export default ButtonWithStyles;
