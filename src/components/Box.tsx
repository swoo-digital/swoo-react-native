import React, {FC} from 'react';
import styled from 'styled-components/native';
import {MarginTypes, PaddingTypes} from './commonInterfaces';
import {marginStyles, paddingStyles} from './commonStyles';
import {BoxInterface} from './boxTypes';

export const StyledBox: React.FC<
    MarginTypes & PaddingTypes
> = styled.View<BoxInterface>`
    ${marginStyles};
    ${paddingStyles};
    ${({width}) => width && `width: ${width}`};
    ${({height}) => height && `height: ${height}`};
    ${({minHeight}) => minHeight && `min-height: ${minHeight}px`};
    ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}`};
    ${({bg}) => bg && `background-color: ${bg}`};
    ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection}`};
    ${({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap}`};
    ${({flex}) => (flex || flex === 0) && `flex: ${flex}`};
    ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent}`};
    ${({alignItems}) => alignItems && `alignItems: ${alignItems}`};
    ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
    ${({paddingHorizontal}) => paddingHorizontal && `padding-horizontal: ${paddingHorizontal}`};
    ${({paddingVertical}) => paddingVertical && `padding-vertical: ${paddingVertical}`};
    ${({borderStyle}) => borderStyle && `border-style: ${borderStyle}`};
`;
export const Box: FC<BoxInterface> = ({children, ...rest}) => (
    <StyledBox {...rest}>{children}</StyledBox>
);
