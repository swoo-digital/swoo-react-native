import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export interface IStyledTouchableOpacity {
  justify?: string;
  alignItems?: string;
  padding?: string;
  borderRadius?: string;
}

const StyledTouchableOpacity = styled(
  TouchableOpacity,
)<IStyledTouchableOpacity>`
  justify-content: ${props => props.justify || 'center'}
  background-color: ${({theme}) => theme.colors?.buttons || 'white'};
  align-items: ${props => props.alignItems || 'center'}
  padding: ${props => props.padding || '16px 69px'};
  border-radius: ${props => props.borderRadius || '24px'}
`;

export default StyledTouchableOpacity;
