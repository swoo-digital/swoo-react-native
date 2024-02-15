import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  padding: 16px 24px;
  background: ${props => props.theme.colors.bg.white};
  border-radius: 24px;
  width: 160px;
  justify-content: center;
`;

const StyledButtonText = styled.Text`
  color: ${props => props.theme.colors.text.black};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.bold};
  text-align: center;
`;

type ButtonProps = {
  title: string;
  onPress: () => void;
  testID?: string;
};

function Button({title, onPress, testID}: ButtonProps) {
  return (
    <StyledButton onPress={onPress} testID={testID}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledButton>
  );
}

export default Button;
