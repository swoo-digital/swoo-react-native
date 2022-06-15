import 'react-native';
import React from 'react';
import Root from '../App'
import CounterScreen from '../src/Screen/CounterScreen';
import { shallow, mount } from 'enzyme';
import BtnComp from '../src/Screen/CounterScreen/BtnComp';

describe("Root Component", () => {
    const wrapper = shallow(
        <Root />
    );

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('should Test for increment button to be present', () => {
        expect(wrapper
            .find('TouchableOpacity')
            .findWhere((node) => node.prop('testID') == 'inc')).toBeTruthy()
    })

    it('should Test for decrement button to be present', () => {
        expect(wrapper
            .find('TouchableOpacity')
            .findWhere((node) => node.prop('testID') == 'dec')).toBeTruthy()
    })

    it('should Test for Increment button Click Action', () => {
        const onPress = jest.fn()
        const component = shallow(<BtnComp compID={'inc'} onPress={onPress} />)
        component.find('TouchableOpacity')
            .findWhere((node) => node.prop('testID') == 'inc').props().onPress()
        expect(onPress).toHaveBeenCalledTimes(1);
    })

    it('should Test for Decrement button Click Action', () => {
        const onPress = jest.fn()
        const component = shallow(<BtnComp compID={'dec'} onPress={onPress} />)
        component.find('TouchableOpacity')
            .findWhere((node) => node.prop('testID') == 'dec').props().onPress()
        expect(onPress).toHaveBeenCalledTimes(1);
    })
});