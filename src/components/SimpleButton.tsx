import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface SimpleButtonProps {
  label: string;
  onPress: () => void;
}

const SimpleButton = (props: SimpleButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 60,
    borderRadius: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SimpleButton;
