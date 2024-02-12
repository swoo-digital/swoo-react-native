import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import SimpleButton from './src/components/SimpleButton';

const App = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const onIncrement = () => {
    setCurrentCount(currentCount + 1);
  };

  const onDecrement = () => {
    setCurrentCount(currentCount - 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.counterContainer}>
        <SimpleButton label="-1" onPress={onDecrement} />
        <Text style={styles.counter}>{currentCount}</Text>
        <SimpleButton label="+1" onPress={onIncrement} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#004761',
  },
  counterContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 64,
    paddingVertical: 80,
    fontWeight: 'bold',
    color: '#8CD6BD',
  },
});

export default App;
