import React from 'react';
import {ICustomButtonProps} from '../../interfaces/custom-button-props.interface';
import styled from 'styled-components/native';

const CustomButton: React.FC<ICustomButtonProps> = ({title, onPress}) => {
  const Button = styled.Pressable`
    background-color: white;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 69px;
  `;

  const Text = styled.Text`
    color: black;
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
