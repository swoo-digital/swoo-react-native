import React from 'react';
import CustomButton from '../buttons/custom-button.component';
import {View} from 'react-native';
import {ICounterOperationProps} from '../../../interfaces/counter-operation-props.interface';

const CounterOperation: React.FC<ICounterOperationProps> = ({title, func}) => {
  return (
    <View>
      <CustomButton title={title} onPress={func} />
    </View>
  );
};

export default CounterOperation;
