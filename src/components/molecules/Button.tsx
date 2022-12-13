import React from 'react';
import {CustomText, Pressable} from '../atoms';

const Button: React.FunctionComponent<{onClick: () => void; title: string}> = ({
  onClick,
  title,
}): JSX.Element => {
  return (
    <Pressable onPress={onClick}>
      <CustomText>{title}</CustomText>
    </Pressable>
  );
};

export default Button;
