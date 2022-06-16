import styled from 'styled-components/native';
import {Responsive} from '../../Theme';
import {Colors} from '../../Theme/Colors';
import {color, space, typography} from 'styled-system';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.themeBackground};
`;
export const ContainerButtons = styled.View`
  width: ${Responsive.widthPercentageToDP('100')}px;
  height: ${Responsive.heightPercentageToDP('40')}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CounterButton = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP('40')}px;
  height: ${Responsive.heightPercentageToDP('7.5')}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.buttonBackground};
  border-radius: ${Responsive.widthPercentageToDP('5.5')}px;
`;

export const ButtonText = styled.Text`
  font-weight: 700;
  color: ${Colors.buttonText};
  font-size: ${Responsive.convertFontScale('24')}px;
`;

export const CounterText = styled.Text`
  font-weight: 700;
  color: ${Colors.counterLblText};
  font-size: ${Responsive.convertFontScale('64')}px;
  text-align: center;
  ${color}
  ${space}
  ${typography}
`;
