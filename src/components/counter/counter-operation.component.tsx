import React from 'react';
import CustomButton from '../buttons/custom-button.component';
import {View} from 'react-native';

const CounterOperation: React.FC<{title: string; func: () => void}> = ({
  title,
  func,
}) => {
  return (
    <View>
      <CustomButton title={title} onPress={func} />
    </View>
  );
};

export default CounterOperation;
