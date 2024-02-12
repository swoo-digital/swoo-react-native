import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import SimpleButton from './src/components/SimpleButton';

const App = () => {
  // Is wrong to save this state on Redux. As it is a local state, it should be saved on the screen.
  // Even if the feature is going to be used in other screens, it is better to use a context to share the state.
  // Sorry I don't like Redux, I think it is a practice that is not necessary in most cases, and its harder to maintain.
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
