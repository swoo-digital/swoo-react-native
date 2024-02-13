import React, {FC} from 'react';
import styled from 'styled-components/native';
import {MarginTypes} from '../commonInterfaces';
import {space, layout, color, typography} from 'styled-system'

type TextInterface = MarginTypes & {
    lineHeight?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    children: string | number;
    fontWeight?: number;
    textAlign?: string;
};

const StyledText = styled.Text<TextInterface>`
    ${space}
    ${layout}
    ${color}
    ${typography}
`;

export const Text: FC<TextInterface> = ({children, ...rest}) => (
    <StyledText {...rest}>{children}</StyledText>
);
