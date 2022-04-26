import React from 'react';
// components
import {Button} from 'modules/core/components';

import {CounterText, ScreenRoot} from './home.styled';

const Home = () => {
  return (
    <ScreenRoot>
      <Button title="-1" />
      <CounterText>0</CounterText>
      <Button title="+1" />
    </ScreenRoot>
  );
};

export default Home;
