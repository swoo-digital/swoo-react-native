import React from 'react';

import {Text} from '../SimpleComponents/Text';
import {Button} from '../SimpleComponents/Button';
import {fonts} from '../../../styles/Fonts';
import {useDispatch} from "react-redux";
import {
    decrement,
    increment,
} from '../../../store/slices/counterSlice';
import {useTheme} from "styled-components/native";

type ActionButtonProps = {
    incrementing?: boolean;
};
export const CounterActivityButton = ({incrementing}: ActionButtonProps) => {
    const dispatch = useDispatch();
    const colors = useTheme().colors;

    const handlePress = () => {
        if (incrementing) {
            dispatch(increment());
        } else {
            dispatch(decrement());
        }
    }

    return (
        <Button
            onPress={handlePress}
            bg={colors.colorWhite}
            px={5}
            py={3}
            borderRadius={2}
            testID={incrementing ? 'incrementButton' : 'decrementButton'}
        >
            <Text
                color={colors.colorTextBlack}
                fontFamily={fonts.interBold}
                fontSize={3}
            >
                {increment ? '+1' : '-1'}
            </Text>
        </Button>
    );
};
