import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../theme/colors';
import {Fonts} from '../theme/fonts';

const ButtonContainer = styled.TouchableOpacity({
  padding: 16,
  borderRadius: 24,
  backgroundColor: Colors.white,
  justifyContent: 'center',
  width: 160,
});

const ButtonText = styled.Text({
  fontSize: 24,
  textAlign: 'center',
  color: Colors.black,
  fontFamily: Fonts.bold,
});

interface PressableButtonProps {
  onPress: () => void;
  title: string;
}

export const PressableButton = ({onPress, title}: PressableButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};
