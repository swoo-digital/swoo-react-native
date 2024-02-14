import React from 'react'
import styled from 'styled-components/native'

import { useTheme } from '../../helpers'
import Typography from '../typography/typography'

interface ButtonProps {
  title: string
  onPress: () => void
}

const Button = ({ title, onPress }: ButtonProps) => {
  const { palette } = useTheme()

  const StyledButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${palette.buttonBgColor};
    border-radius: 24px;
    padding: 16px 69px;
  `

  return (
    <StyledButton onPress={onPress} activeOpacity={0.7}>
      <Typography>{title}</Typography>
    </StyledButton>
  )
}

export default Button
