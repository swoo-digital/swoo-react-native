import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {decrement, increment} from './slice';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.counterButton}>
        <TouchableNativeFeedback onPress={() => dispatch(decrement())}>
          <Text style={styles.counterButtonContent}>-1</Text>
        </TouchableNativeFeedback>
      </View>
      <Text style={styles.counterValue}>{count}</Text>
      <View style={styles.counterButton}>
        <TouchableNativeFeedback onPress={() => dispatch(increment())}>
          <Text style={styles.counterButtonContent}>+1</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterValue: {
    color: '#8cd6bd',
    fontSize: 64,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',

    // Alternatively, this could be based on a percentage
    // (for example the counter content could be made to take up 2/3rds of available screen space),
    // however since nothing was specified, this simple approach to copy the distances as given in the mockup
    // was preferable.
    marginTop: 104,
    marginBottom: 104,
  },
  counterButtonContent: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  counterButton: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 24,
    width: 160,
  },
  container: {
    backgroundColor: '#004761',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
