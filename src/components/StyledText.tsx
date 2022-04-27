import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  primary?: boolean;
  secondary?: boolean;
  theme?: any;
  fontSize?: string;
  bold?: boolean;
  light?: boolean;
  margin?: any;
  textAlign?: any;
}

const StyledText = styled.Text<TextProps>`
  color: ${props =>
    props.color
      ? props.color
      : props.primary
      ? props.theme.primaryText
      : props.secondary
      ? props.theme.secondaryText
      : props.theme.primaryText};
  font-size: ${props => (props.fontSize ? props.fontSize : '16px')};
  font-family: ${props =>
    props.primary ? props.theme.primaryFont : props.theme.secondaryFont};
  font-weight: ${props => (props.bold ? 600 : props.light ? 300 : 400)};
  margin-bottom: ${props => (props.margin ? props.margin : 0)};
  flex-wrap: wrap;
  ${props => props.textAlign && `text-align:${props.textAlign};`}
`;

export default StyledText;
