import React from 'react';
import { Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement } from '../Redux/Slices/CounterReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CounterStyles } from './CounterStyles';
import { useTheme } from '@react-navigation/native';

export const routeCounter = 'Counter';

const Counter = props => {
  const { colors } = useTheme();
  const { value } = useSelector(state => state.CounterReducer);
  const dispatch = useDispatch();

  const DecrementCount = async () => {
    await AsyncStorage.setItem('counter', JSON.stringify(value - 1));
    dispatch(Decrement());
  };

  const IncrementCount = async () => {
    await AsyncStorage.setItem('counter', JSON.stringify(value + 1));
    dispatch(Increment());
  };

  return (
    <View
      style={[CounterStyles.Container, { backgroundColor: colors.primary }]}>
      <StatusBar barStyle={'light-content'} />

      <TouchableOpacity
        onPress={DecrementCount}
        style={[
          CounterStyles.buttonView,
          { backgroundColor: colors.background },
        ]}>
        <Text style={[CounterStyles.buttonText, { color: colors.text }]}>
          {'-1'}
        </Text>
      </TouchableOpacity>

      <Text style={[CounterStyles.counterValue, { color: colors.counter }]}>
        {value}
      </Text>

      <TouchableOpacity
        onPress={IncrementCount}
        style={[
          CounterStyles.buttonView,
          { backgroundColor: colors.background },
        ]}>
        <Text style={[CounterStyles.buttonText, { color: colors.text }]}>
          {'+1'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
