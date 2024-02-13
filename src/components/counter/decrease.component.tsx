import React from 'react';
import CustomButton from '../buttons/custom-button.component';
import {View} from 'react-native';

const DecreaseComponent: React.FC<{decrease: () => void}> = ({decrease}) => {
  return (
    <View>
      <CustomButton title={'-1'} onPress={decrease} />
    </View>
  );
};

export default DecreaseComponent;
