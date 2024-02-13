import styled from 'styled-components/native';
import {Fonts} from '../theme/fonts';
import {Colors} from '../theme/colors';

export const Counter = styled.Text({
  fontFamily: Fonts.bold,
  fontSize: 64,
  color: Colors.counterValueColor,
  marginVertical: 100,
});
