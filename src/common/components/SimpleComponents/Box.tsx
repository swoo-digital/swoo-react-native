import React, {FC} from 'react';
import styled from 'styled-components/native';
import {MarginTypes, PaddingTypes} from '../commonInterfaces';
import {BoxInterface} from './boxTypes';
import {space, layout, color, flex} from 'styled-system'

export const StyledBox: React.FC<
    MarginTypes & PaddingTypes
> = styled.View<BoxInterface>`
    ${space}
    ${layout}
    ${color}
    ${flex}
`;
export const Box: FC<BoxInterface> = ({children, ...rest}) => (
    <StyledBox {...rest}>{children}</StyledBox>
);
