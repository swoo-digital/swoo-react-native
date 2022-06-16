import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTypedSelector} from '../hooks/useTypetSelector';

export default function TotalCount() {
  const {count} = useTypedSelector(state => state.store);
  return (
    <View style={styles.countWrapper}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  countWrapper: {
    paddingVertical: 164,
  },
  count: {
    textAlign: 'center',
    fontSize: 64,
    color: '#8cd6bd',
    fontWeight: '700',
  },
});
