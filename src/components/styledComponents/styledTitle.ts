import {Text} from 'react-native';
import styled from 'styled-components/native';

export interface IStyledText {
  fontSize?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
}

const StyledTitle = styled(Text)<IStyledText>`
  font-size: ${props => props.fontSize || '64px;'};
  color: ${({theme}) => theme.colors?.title || '#000'};
  text-align: ${props => props.textAlign || 'center'};
  font-weight: ${props => props.fontWeight || '700'};
  font-family: 'Inter';
`;

export default StyledTitle;
