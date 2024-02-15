import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

const TextComponent: FC<{
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}> = ({children, style = {}}) => {
  return <Text style={style}>{children}</Text>;
};

export default TextComponent;
