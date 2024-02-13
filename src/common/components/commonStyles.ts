import {css} from 'styled-components/native';
import {MarginTypes, PaddingTypes} from './commonInterfaces';

export const marginStyles = css<MarginTypes>`
    ${({mt}) => mt && `margin-top: ${mt}`};
    ${({mr}) => mr && `margin-right: ${mr}`};
    ${({mb}) => mb && `margin-bottom: ${mb}`};
    ${({ml}) => ml && `margin-left: ${ml}`};
`;
export const paddingStyles = css<PaddingTypes>`
    ${({pt}) => pt && `padding-top: ${pt}`};
    ${({pb}) => pb && `padding-bottom: ${pb}`};
    ${({pr}) => pr && `padding-right: ${pr}`};
    ${({pl}) => pl && `padding-left: ${pl}`};
    ${({ ph }) => ph && `padding-horizontal: ${ph}`};
    ${({ pv }) => pv && `padding-vertical: ${pv}`};
`;
