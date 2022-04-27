import styled from 'styled-components/native';

interface ButtonProps {
  basicBtn?: boolean;
  theme?: any;
  width?: any;
  noPadding?: boolean;
  background?: any;
  facebook?: boolean;
  outline?: boolean;
  small?: boolean;
  padding?: any;
  margin?: any;
}

const BasicButton = styled.TouchableOpacity<ButtonProps>`
  position: relative;
  border-radius: 29px;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.basicBtn || props.disabled
      ? props.theme.defaultBtnBackgroundColor
      : props.facebook
      ? props.theme.facebook
      : props.outline
      ? 'transparent'
      : props.background
      ? props.background
      : props.theme.primaryColor};
  ${props =>
    !props.noPadding &&
    `width: ${props.width ? props.width : '100%'};
      height: ${props.small ? '24px' : '50px'};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}
`;

export default BasicButton;
