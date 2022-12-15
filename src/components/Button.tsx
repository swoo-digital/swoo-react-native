import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import StyledTouchableOpacity, {
  IStyledTouchableOpacity,
} from './styledComponents/styledButton';
import StyledText from './styledComponents/styledText';

interface Button {
  text: string;
}
const Button: React.FC<
  Button & IStyledTouchableOpacity & TouchableOpacityProps
> = props => {
  return (
    <StyledTouchableOpacity {...props}>
      <StyledText>{props.text}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default React.memo(Button);
