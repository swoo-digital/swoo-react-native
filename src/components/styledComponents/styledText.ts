import {Text} from 'react-native';
import styled from 'styled-components/native';

export interface IStyledText {
  fontSize?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
}

const StyledText = styled(Text)<IStyledText>`
  font-size: ${props => props.fontSize || '24px'};
  color: ${({theme}) => theme.colors?.text || '#000'};
  text-align: ${props => props.textAlign || 'left'};
  font-weight: ${props => props.fontWeight || '700'};
  font-family: 'Inter';
`;

export default StyledText;
