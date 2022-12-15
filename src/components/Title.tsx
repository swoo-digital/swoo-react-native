import React from 'react';
import {ViewProps} from 'react-native';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import StyledTitle from './styledComponents/styledTitle';
import StyledView from './styledComponents/styledView';

const Title: React.FC<ViewProps> = props => {
  const counter = useAppSelector(state => state.counter.value);
  return (
    <StyledView>
      <StyledTitle testID={props.testID}>{counter}</StyledTitle>
    </StyledView>
  );
};

export default React.memo(Title);
