import React from 'react';
import {ViewProps} from 'react-native';
import StyledTitle from './styledComponents/styledTitle';
import StyledView from './styledComponents/styledView';
interface ITitle {
  value: number;
}
const Title: React.FC<ITitle & ViewProps> = props => {
  return (
    <StyledView>
      <StyledTitle testID={props.testID}>{props.value}</StyledTitle>
    </StyledView>
  );
};

export default Title;
