import React from 'react';
import {Colors} from './src/theme/colors';
import {CounterScreen} from './src/screens';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />

      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: Colors.mainBackgroundColor},
});
