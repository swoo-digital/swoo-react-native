import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonCounterProps {
  count: number;
  action: any;
}

export default function ButtonCounter({count, action}: ButtonCounterProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => action(1)}>
      <Text style={styles.text}>{count}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingVertical: 26,
    paddingHorizontal: 66,
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000000',
  },
});
