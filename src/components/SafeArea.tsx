import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight ?? 0}px;
  background: ${(props) => props.theme.colors.bg.primary};
`

export default SafeArea
