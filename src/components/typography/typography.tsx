import React from 'react'
import styled from 'styled-components/native'

import { useTheme } from '../../helpers'

interface TypographyProps {
  children: React.ReactNode
  fontSize?: number
  lineHeight?: number
  style?: React.CSSProperties
}

const Typography = ({
  children,
  fontSize = 24,
  lineHeight = 1.2,
  style,
  ...rest
}: TypographyProps) => {
  const { palette, fonts } = useTheme()

  const textStyles = {
    fontFamily: fonts.inter_bold,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight * fontSize}px`,
    color: palette.buttonTextColor,
    ...style
  }

  const StyledText = styled.Text`
    ${textStyles}
  `

  return <StyledText {...rest}>{children}</StyledText>
}

export default Typography
