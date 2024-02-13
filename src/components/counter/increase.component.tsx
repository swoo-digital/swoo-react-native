import React from 'react';
import CustomButton from '../buttons/custom-button.component';
import {View} from 'react-native';

const IncreaseComponent: React.FC<{increase: () => void}> = ({increase}) => {
  return (
    <View>
      <CustomButton title={'+1'} onPress={increase} />
    </View>
  );
};

export default IncreaseComponent;
