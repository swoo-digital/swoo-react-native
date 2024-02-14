import React from 'react';
import {ICustomButtonProps} from '../../../interfaces/custom-button-props.interface';
import styled from 'styled-components/native';
import useTheme from '../../../hooks/useTheme.hook';

const CustomButton: React.FC<ICustomButtonProps> = ({title, onPress}) => {
  const theme = useTheme();
  const Button = styled.Pressable`
    background-color: ${theme.theme.colors.primaryButton};
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 69px;
  `;

  const Text = styled.Text`
    color: ${theme.theme.colors.primaryButtonText};
    font-size: 24px;
    font-weight: bold;
  `;

  return (
    <Button onPress={onPress}>
      <Text>{title}</Text>
    </Button>
  );
};

export default CustomButton;
