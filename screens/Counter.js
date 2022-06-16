import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonCounter from '../components/Button';
import TotalCount from '../components/TotalCount';
import {useAction} from '../hooks/useActions';

export default function Counter() {
  const increase = '+1';
  const decrease = '-1';

  const {set_decrease, set_increase} = useAction();

  return (
    <View style={styles.root}>
      <View>
        <ButtonCounter count={decrease} action={set_decrease} />
        <TotalCount />
        <ButtonCounter count={increase} action={set_increase} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#004761',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
