import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Button = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[1]};
  background: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 24px;
  width: 160px;
  justify-content: center;
`

export default Button
