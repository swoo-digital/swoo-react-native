import React from 'react';
import {UiView} from '../shared';
import {CounterBlock} from '../widgets';

export const Main = () => {
  return (
    <UiView flex={1} alignItems="center" justifyContent="center">
      <CounterBlock />
    </UiView>
  );
};
