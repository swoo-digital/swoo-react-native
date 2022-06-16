import styled from 'styled-components/native';
import {ThemeInterface} from 'styled-components';

interface TextProps {
  theme: ThemeInterface;
}

const CustomText = styled.Text<TextProps>`
  font-size: 60px;
  font-weight: bold;
  color: ${props => props.theme.secondaryTextColor};
`;

export default CustomText;
