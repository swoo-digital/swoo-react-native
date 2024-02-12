/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Touchable } from './src/components/touchable';
import { Text, ValueText } from './src/components/text';
import { Box } from './src/components/box';
import { colors } from './src/theme';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.background }} >
      <StatusBar barStyle={'dark-content'} />
      <Box>
        <Touchable>
          <ValueText>
            +1
          </ValueText>
        </Touchable>
        <Text>
          0
        </Text>
        <Touchable >
          <ValueText>
            -1
          </ValueText>
        </Touchable>
      </Box>
    </SafeAreaView>
  );
};

export default App;
