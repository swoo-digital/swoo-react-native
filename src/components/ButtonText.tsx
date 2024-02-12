import { Text } from 'react-native'
import styled from 'styled-components/native'

const ButtonText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
`

export default ButtonText
