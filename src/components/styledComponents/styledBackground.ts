import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

interface IBackGround {
  justify?: string;
  ai?: string;
}

const BackGround = styled(SafeAreaView)<IBackGround>`
  flex: 1;
  justify-content: ${props => props?.justify || 'center'}
  background-color: ${({theme}) => theme.colors?.background || 'white'};
  align-items: ${props => props?.ai || 'center'};
  padding: 10px;
`;

export default BackGround;
