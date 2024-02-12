import React from 'react'
import styled from 'styled-components/native'
import Button from '../components/Button'
import Counter from '../components/Counter'
import ButtonText from '../components/ButtonText'

const HomeContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}))``

const Home = () => {
  return (
    <HomeContainer>
      <Button>
        <ButtonText>{'+1'}</ButtonText>
      </Button>
      <Counter>{'123'}</Counter>
      <Button>
        <ButtonText>{'-1'}</ButtonText>
      </Button>
    </HomeContainer>
  )
}

export default Home
