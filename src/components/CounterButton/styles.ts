import {Pressable} from 'react-native';
import styled from 'styled-components';
import {pixelSizeVertical, widthPixel} from '../../utils/metrics';

export const ButtonContainer = styled(Pressable)`
  padding-vertical: ${pixelSizeVertical(16)}px;
  width: ${widthPixel(160)}px;
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`;
