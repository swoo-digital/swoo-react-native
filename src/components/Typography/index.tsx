import {Text} from 'react-native';
import styled from 'styled-components';

import {fontPixel} from '../../utils/metrics';
import {ITypographyProps} from './types';

export const TextBold = styled(Text)<ITypographyProps>`
  font-size: ${({fontSize}) =>
    fontSize ? fontPixel(fontSize) : fontPixel(14)}px;
  color: ${({color, theme}) => (color ? color : theme.colors.black)};
  font-family: ${({theme}) => theme.fonts.inter_bold};
`;
