import {PressableProps} from 'react-native';

export interface CounterButtonProps extends PressableProps {
  text: string;
  onPress: () => void;
}
