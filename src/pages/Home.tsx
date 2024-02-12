import React from 'react'
import styled from 'styled-components/native'
import Button from '../components/Button'
import Counter from '../components/Counter'
import ButtonText from '../components/ButtonText'
import I18n from '../localization'
import { useAppDispatch, useAppSelector } from '../hooks'
import { decrementCounter, incrementCounter } from '../store/counter'

const HomeContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}))``

const Home = () => {
  const dispatch = useAppDispatch()
  const { counter } = useAppSelector((state) => state.counter)

  const onIncrement = () => {
    dispatch(incrementCounter())
  }
  const onDecrement = () => {
    dispatch(decrementCounter())
  }

  return (
    <HomeContainer>
      <Button onPress={onIncrement}>
        <ButtonText>{I18n.t('increment')}</ButtonText>
      </Button>
      <Counter>{counter}</Counter>
      <Button onPress={onDecrement}>
        <ButtonText>{I18n.t('decrement')}</ButtonText>
      </Button>
    </HomeContainer>
  )
}

export default Home
