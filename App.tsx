import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
        <TouchableOpacity
          style={styles.counterButtonView}
          onPress={onDecrement}>
          <Text style={styles.counterButtonLabel}>-1</Text>
        </TouchableOpacity>
        <Text style={styles.counter}>{currentCount}</Text>
        <TouchableOpacity
          style={styles.counterButtonView}
          onPress={onIncrement}>
          <Text style={styles.counterButtonLabel}>+1</Text>
        </TouchableOpacity>
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
  counterButtonView: {
    width: 160,
    height: 60,
    borderRadius: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  counterButtonLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 64,
    paddingVertical: 80,
    fontWeight: 'bold',
    color: '#8CD6BD',
  },
});

export default App;
