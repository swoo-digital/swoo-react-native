import React from 'react';

import {Text} from '../SimpleComponents/Text';
import {Button} from '../SimpleComponents/Button';
import {colors} from '../../styles/Colors';
import {fonts} from '../../styles/Fonts';

type ActionButtonProps = {
    handleCounter: (initialState: number) => void;
    increment?: boolean;
};
export const CounterActivityButton = ({handleCounter, increment}: ActionButtonProps) => {
    const handlePress = () => {
        handleCounter((initialState: number): number => increment ? ++initialState : --initialState);
    }

    return (
        <Button
            onPress={handlePress}
            bg={colors.colorWhite}
            pv={"16px"}
            ph={"68px"}
            borderRadius={"24px"}
        >
            <Text
                color={colors.colorTextBlack}
                fontFamily={fonts.interBold}
                fontSize={"24px"}
            >
                {increment ? '+1' : '-1'}
            </Text>
        </Button>
    );
};
