import styled from 'styled-components/native';
import {ThemeInterface} from 'styled-components';

interface BoxProps {
  theme: ThemeInterface;
}

const Box = styled.View<BoxProps>`
  flex: 1;
  background-color: ${props => props.theme.primaryColor};
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

export default Box;
