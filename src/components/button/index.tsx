import React from 'react';
import {Text, Touchable} from '../../components';

const Button: React.FunctionComponent<{onClick: () => void; title: string}> = ({
  onClick,
  title,
}): JSX.Element => {
  return (
    <Touchable onPress={onClick}>
      <Text>{title}</Text>
    </Touchable>
  );
};

export default Button;
