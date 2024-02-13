import React from 'react';
import CustomButton from '../buttons/custom-button.component';

const IncreaseComponent: React.FC<{increase: () => void}> = ({increase}) => {
  return <CustomButton title={'+'} onPress={increase} />;
};

export default IncreaseComponent;
