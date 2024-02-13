import React from 'react';
import {Box} from '../common/components/SimpleComponents/Box';
import {Text} from '../common/components/SimpleComponents/Text';
import {CounterActivityButton} from '../common/components/CombinedComponents/CounterActivityButton';
import {fonts} from '../../src/styles/Fonts';
import {useSelector} from 'react-redux';
import {selectCount} from '../../src/store/slices/counterSlice';
import {useTheme} from "styled-components/native";

export const CounterPage = () => {
    const count = useSelector(selectCount);
    const colors = useTheme().colors;
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
                <CounterActivityButton/>
                <Text
                    color={colors.colorTextBlack}
                    fontFamily={fonts.interBold}
                    fontSize={3}
                    testID={"countText"}
                >
                    {count}
                </Text>
                <CounterActivityButton
                    incrementing
                />
            </Box>
        </Box>
    );
};
