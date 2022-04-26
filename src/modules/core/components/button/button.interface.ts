import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type ButtonInterface = {
  title: string;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
};
