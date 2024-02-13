import React, {FC} from 'react';
import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from '../commonStyles';
import {BoxInterface} from './boxInterfaces';
import {MarginTypes, PaddingTypes} from '../commonInterfaces';
import { space, layout, color, border } from 'styled-system'

type ButtonInterface = BoxInterface &
    MarginTypes &
    PaddingTypes & {
    onPress: () => void;
    children: React.ReactNode;
};

const StyledButton = styled.TouchableOpacity<ButtonInterface>`
    ${space}
    ${layout}
    ${color}
    ${border}
`;

export const Button: FC<ButtonInterface> = ({children, ...rest}) => (
    <StyledButton {...rest}>
        {children}
    </StyledButton>
);
