import React from 'react';
import CustomText from '../Text';
import {Touchable} from '../../components';

const Button: React.FunctionComponent<{onClick: () => void; title: string}> = ({
  onClick,
  title,
}): JSX.Element => {
  return (
    <Touchable onPress={onClick}>
      <CustomText>{title}</CustomText>
    </Touchable>
  );
};

export default Button;
