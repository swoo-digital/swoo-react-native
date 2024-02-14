import React from 'react';
import styled from 'styled-components/native';

interface SimpleButtonProps {
  label: string;
  onPress: () => void;
}

const Container = styled.TouchableOpacity`
  width: 160px;
  height: 60px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Label = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const SimpleButton = (props: SimpleButtonProps) => {
  return (
    <Container onPress={props.onPress}>
      <Label>{props.label}</Label>
    </Container>
  );
};

export default SimpleButton;
