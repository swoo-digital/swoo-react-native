import React from 'react';
import {Box} from './src/components/SimpleComponents/Box';
import {Text} from './src/components/SimpleComponents/Text';
import {colors} from './src/styles/Colors';
import {CounterActivityButton} from './src/components/CombinedComponents/CounterActivityButton';
import {fonts} from './src/styles/Fonts';

const App = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <Box
            bg={colors.colorPrimary}
            flex={1}
            width={"100%"}
            justifyContent="center"
            alignItems="center"
        >
            <Box
                height={"340px"}
                justifyContent="space-between"
                alignItems="center"
            >
                <CounterActivityButton
                    handleCounter={setCounter}
                />
                <Text
                    color={colors.colorTextBlack}
                    fontFamily={fonts.interBold}
                    fontSize={"24px"}
                >
                    {counter}
                </Text>
                <CounterActivityButton
                    handleCounter={setCounter}
                    increment
                />
            </Box>
        </Box>
    );
};


export default App;
