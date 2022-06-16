import React from 'react';
import styled from 'styled-components/native'
interface Props {
    text: string;
    onButtonClick: () => void
}
const ButtonContainer = styled.TouchableOpacity`
    box-sizing: border-box;
    flex-shrink: 0;
    width: 160px;
    height: auto; /* 61px */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: #ffffff;
    overflow: visible;
    border-radius: 24px;
`;

const ButtonText = styled.Text`

    flex-shrink: 0;
    font-weight: 700;
    color: #000000;
    font-size: 24px;

`;
const CustomButton: React.FC<Props> = ({ text, onButtonClick }) => (
    <ButtonContainer
        onPress={onButtonClick}
    >
        <ButtonText>{text}</ButtonText>
    </ButtonContainer>
);

export default CustomButton;

