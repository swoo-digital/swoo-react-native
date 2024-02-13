import React from 'react';
import CustomButton from '../buttons/custom-button.component';

const DecreaseComponent: React.FC<{decrease: () => void}> = ({decrease}) => {
  return <CustomButton title={'-'} onPress={decrease} />;
};

export default DecreaseComponent;
