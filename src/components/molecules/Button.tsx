import React from 'react';
import {Pressable, Text} from '../atoms';

const Button: React.FunctionComponent<{onClick: () => void; title: string}> = ({
  onClick,
  title,
}): JSX.Element => {
  return (
    <Pressable onPress={onClick}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
