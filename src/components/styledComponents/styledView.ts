import {View} from 'react-native';
import styled from 'styled-components/native';

interface IView {
  justify?: string;
  alignItems?: string;
  background?: string;
  flex?: number;
}

const StyledView = styled(View)<IView>`
  flex: ${props => props.flex || 1};
  justify-content: ${props => props.justify || 'center'};
  background-color: ${props => props.background || 'transparent'};
  align-items: ${props => props.alignItems || 'center'};
  max-height: 400px;
`;

export default StyledView;
