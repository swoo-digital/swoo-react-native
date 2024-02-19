import React from 'react';
import {Dimensions} from 'react-native';
import {UiView} from '../../shared';
import {CountDecrement, CountIncrement} from '../../features';
import {CountNumber} from '../../entities';

export const CounterBlock = () => {
  const screenHeight = Dimensions.get('window').height;

  const gap = screenHeight * 0.8;

  return (
    <UiView
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      height={gap}>
      <CountDecrement />
      <CountNumber />
      <CountIncrement />
    </UiView>
  );
};
