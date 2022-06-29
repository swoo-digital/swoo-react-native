import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '../components/Box'
import Row from '../components/Row'
import StyledButton from '../components/StyledButton'
import StyledText from '../components/StyledText'
import { decrement, increment } from '../store/counterSlice'
import { RootState } from '../store/store'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Box bg={'navy'} flex={1} alignItems={'center'} justifyContent={'center'}>
      <Row
        height={'50%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={'column'}
      >
        <StyledButton
          title={'-1'}
          onPress={() => {
            dispatch(decrement())
          }}
        />
        <StyledText
          testID={'countText'}
          fontSize={64}
          color={'green'}
          fontFamily={'Inter-Bold'}
          textAlign={'center'}
        >
          {count}
        </StyledText>
        <StyledButton
          title={'+1'}
          onPress={() => {
            dispatch(increment())
          }}
        />
      </Row>
    </Box>
  )
}

export default Counter
