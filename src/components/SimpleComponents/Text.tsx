import React, {FC} from 'react';
import styled from 'styled-components/native';
import {MarginTypes} from '../commonInterfaces';
import {marginStyles} from '../commonStyles';

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
    ${marginStyles};
    ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
    ${({textAlign}) => textAlign && `text-align: ${textAlign}`};
    ${({lineHeight}) => lineHeight && `line-height: ${lineHeight}`};
    ${({color}) => color && `color: ${color}`};
    ${({fontSize}) => fontSize && `font-size: ${fontSize}`};
    ${({fontFamily}) => fontFamily && `font-family: ${fontFamily}`};
`;

export const Text: FC<TextInterface> = ({children, ...rest}) => (
    <StyledText {...rest}>{children}</StyledText>
);
