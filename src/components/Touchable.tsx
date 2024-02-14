import styled from 'styled-components/native';
import {colors} from '../utils/colors';

export const Touchable = styled.TouchableOpacity({
  width: 160,
  padding: 16,
  borderRadius: 24,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.white,
});
