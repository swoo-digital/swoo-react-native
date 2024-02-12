import { Text } from 'react-native'
import styled from 'styled-components/native'

const Counter = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.secondary};
  margin: ${(props) => props.theme.space[2]} 0;
`

export default Counter
