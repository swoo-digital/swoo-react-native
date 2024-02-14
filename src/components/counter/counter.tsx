import React from 'react'
import styled from 'styled-components/native'

import { decrement, increment } from '../../store/reducers/counterSlice'
import { useAppSelector, useAppDispatch } from '../../store'
import { useTheme } from '../../helpers'
import { PaletteInterface } from '../../theme/palette'

import { Button } from '../button'
import { Typography } from '../typography'

const StyledContainer = styled.View<{ palette: PaletteInterface }>`
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-color: ${({ palette }) => palette.secondary};
`

const StyledRowContainer = styled.View`
  justify-content: space-between;
  align-items: center;
`

const StyledTextWrapper = styled.View`
  margin-top: 100px;
  margin-bottom: 100px;
`

const Counter = () => {
  const { palette } = useTheme()
  const dispatch = useAppDispatch()
  const { value } = useAppSelector((state) => state.counter)

  const handleIncrease = () => {
    dispatch(increment())
  }

  const handleDecrease = () => {
    dispatch(decrement())
  }

  return (
    <StyledContainer palette={palette}>
      <StyledRowContainer>
        <Button title="-1" onPress={handleDecrease} />
        <StyledTextWrapper>
          <Typography fontSize={64} color={palette.primary}>
            {value}
          </Typography>
        </StyledTextWrapper>
        <Button title="+1" onPress={handleIncrease} />
      </StyledRowContainer>
    </StyledContainer>
  )
}

export default Counter
