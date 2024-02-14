import React from 'react';
import renderer, {act} from 'react-test-renderer';
import CounterScreen from '../src/screens/CounterScreen';
import {Counter} from '../src/screens/CounterScreen';
import ThemeTestWrapper from '../src/components/ThemeTestWrapper';

describe('<CounterScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeTestWrapper>
          <CounterScreen />
        </ThemeTestWrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CounterScreen', () => {
  it('should increment the counter', () => {
    const tree = renderer.create(
      <ThemeTestWrapper>
        <CounterScreen />
      </ThemeTestWrapper>,
    );
    const instance = tree.root;
    const button = instance.findByProps({label: '+1'});
    act(() => {
      button.props.onPress();
    });
    expect(instance.findByType(Counter).props.children).toBe(1);
  });

  it('should decrement the counter', () => {
    const tree = renderer.create(
      <ThemeTestWrapper>
        <CounterScreen />
      </ThemeTestWrapper>,
    );
    const instance = tree.root;
    const button = instance.findByProps({label: '-1'});
    act(() => {
      button.props.onPress();
    });
    expect(instance.findByType(Counter).props.children).toBe(-1);
  });
});
