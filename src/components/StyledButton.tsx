import React from 'react'
import styled from 'styled-components/native'
import {
  color,
  flexbox,
  flex,
  layout,
  space,
  position,
  border,
  typography,
} from 'styled-system'

interface ButtonProps {
  title: string
  onPress: () => void
}

const StyledButton = ({ title, onPress }: ButtonProps) => {
  return (
    <BtnContainer
      onPress={onPress}
      bg={'white'}
      width={160}
      borderRadius={24}
      justifyContent={'center'}
      alignItems={'center'}
      p={16}
    >
      <BtnText fontSize={24} color={'black'} fontFamily={'Inter-Bold'}>
        {title}
      </BtnText>
    </BtnContainer>
  )
}

const BtnContainer = styled.TouchableOpacity`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${flexbox}
  ${flex}
`

const BtnText = styled.Text`
  ${color}
  ${space}
  ${typography}
`

export default StyledButton
