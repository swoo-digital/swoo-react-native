import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

import styled from 'styled-components/native'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

const backgroundColor = "#004761"
const counterColor=  "#8cd6bd"

const Layout = styled.View`
background-color: ${backgroundColor};
flex: 1;
justify-content: center;
align-items: center
`

const StyledTxt = styled.Text`
color: ${counterColor};
font-weight: 700;
font-size: 64px;
letter-spacing: 0px;
text-align: center;
margin-top: 165px;
margin-bottom: 164px
`

const StyledBtn = styled.TouchableOpacity `
width: 160px;
flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  overflow: visible;
  border-radius: 24px;
  height: auto

`

const BtnTxt = styled.Text`
color: #000000;
font-size: 24px;
letter-spacing: 0px;
text-align: center;
`

const Counter: FC = () => {

  const {value} = useSelector(state => state.count)
  const dispatch = useDispatch()  

  const incrementCount = () => {
    dispatch(increment())
  }

  const decrementCount = () => {
    dispatch(decrement())
  }

  return (
    <Layout>
      <StyledBtn  testID="decrementButton"  activeOpacity={0.7} onPress={() => decrementCount()}>
        <BtnTxt>-1</BtnTxt>
      </StyledBtn>
      <StyledTxt>{value}</StyledTxt>
      <StyledBtn  testID="incrementButton" activeOpacity={0.7} onPress={() => incrementCount()} >
        <BtnTxt>+1</BtnTxt>
      </StyledBtn>
    </Layout>
  )
}

export default Counter

const styles = StyleSheet.create({})