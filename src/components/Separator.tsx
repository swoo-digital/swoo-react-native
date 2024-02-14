import React from 'react';
import {View} from 'react-native';

import {pixelSizeVertical} from '../utils/metrics';

interface ISeparatorProps {
  size: number;
}
const Separator = (props: ISeparatorProps) => {
  const {size} = props;
  return <View style={{height: pixelSizeVertical(size)}} />;
};

export default Separator;
