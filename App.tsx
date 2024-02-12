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
    StyleSheet,
    useColorScheme,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Box} from './src/components/Box';
import {Text} from './src/components/Text';

const App = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <Box
            bg="red"
            flex={1}
            width={"100%"}
            height={"200px"}
            justifyContent="center"
            alignItems="center"
        >
            <Text>123</Text>
        </Box>
    );
};


export default App;
