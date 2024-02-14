import React from 'react'
import styled from 'styled-components/native'

import { useTheme } from '../../helpers'

interface ButtonProps {
  title: string
  onPress: () => void
}

const Button = ({ title, onPress }: ButtonProps) => {
  const { palette, fonts } = useTheme()

  const StyledButton = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${palette.buttonBgColor};
    border-radius: 24px;
    padding: 16px 69px;
  `

  const StyledText = styled.Text`
    font-family: ${fonts.inter_bold};
    font-size: 24px;
    line-height: 120%;
    color: ${palette.buttonTextColor};
  `

  return (
    <StyledButton onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledButton>
  )
}

export default Button
