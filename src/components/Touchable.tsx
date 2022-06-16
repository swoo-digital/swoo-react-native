import styled from 'styled-components/native';
import {ThemeInterface} from 'styled-components';

interface ButtonProps {
  theme: ThemeInterface;
}

export const Touchable = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => props.theme.primaryButtonColor};
  border-radius: 25px;
  padding-horizontal: 70px;
  padding-vertical: 15px;
`;

export default Touchable;
