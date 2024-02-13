import React from 'react';
import {ICustomButtonProps} from '../../interfaces/custom-button-props.interface';
import styled from 'styled-components/native';

const CustomButton: React.FC<ICustomButtonProps> = ({title, onPress}) => {
  const Button = styled.Button`
    background-color: white;
    border-radius: 24px;
    display: grid;
    place-content: center;
    color: black;
    font-size: 24px;
    line-height: 1.2;
  `;

  return <Button title={title} onPress={onPress} />;
};

export default CustomButton;
