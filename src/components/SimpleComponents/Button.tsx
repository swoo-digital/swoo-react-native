import React, {FC} from 'react';
import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from '../commonStyles';
import {BoxInterface} from './boxInterfaces';
import {MarginTypes, PaddingTypes} from '../commonInterfaces';

type ButtonInterface = BoxInterface &
    MarginTypes &
    PaddingTypes & {
    onPress: () => void;
    children: React.ReactNode;
};

const StyledButton = styled.TouchableOpacity<ButtonInterface>`
    ${marginStyles};
    ${paddingStyles};
    ${({width}) => width && `width: ${width}`};
    ${({height}) => height && `height: ${height}`};
    ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
    ${({bg}) => bg && `background-color: ${bg}`};
    ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
    ${({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap}`};
    ${({flex}) => (flex || flex === 0) && `flex: ${flex}`};
    ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`};
    ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
    ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
`;

export const Button: FC<ButtonInterface> = ({children, ...rest}) => (
    <StyledButton {...rest}>
        {children}
    </StyledButton>
);
