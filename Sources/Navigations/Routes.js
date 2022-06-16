import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Counter, { routeCounter } from '../Screens/Counter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { SetCounter } from '../Redux/Slices/CounterReducer';

const Stack = createStackNavigator();

const Routes = () => {
  const scheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromAsyncStorage();
  }, []);

  const getDataFromAsyncStorage = async () => {
    const counterValue = await AsyncStorage.getItem('counter');
    const Value = JSON.parse(counterValue);

    if (Value !== null && typeof Value == 'number') {
      const stringToNumber = Number(Value);
      dispatch(SetCounter(stringToNumber));
    }
  };

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
      text: '#101010',
      primary: '#004761',
      counter: '#8cd6bd',
    },
  };

  const darkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#101010',
      text: '#ffffff',
      primary: '#004761',
      counter: '#8cd6bd',
    },
  };

  console.log('scheme -> ', scheme);

  return (
    <NavigationContainer theme={scheme == 'light' ? lightTheme : darkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routeCounter} component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
