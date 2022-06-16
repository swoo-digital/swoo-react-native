import { StyleSheet } from 'react-native';
import { Colors, Responsive } from '../Utils';

export const CounterStyles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonView: {
    width: Responsive.wp(40),
    height: Responsive.hp(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Responsive.normalize(25),
  },
  buttonText: {
    fontSize: Responsive.normalize(25),
    fontWeight: 'bold',
  },
  counterValue: {
    fontSize: Responsive.normalize(100),
    fontWeight: 'bold',
  },
});
