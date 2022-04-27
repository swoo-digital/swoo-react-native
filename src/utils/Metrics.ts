import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

let scaleWidth = SCREEN_WIDTH / 375;
let scaleHeight = SCREEN_HEIGHT / 667;

const NormalizeWidth = (size: number) => {
  let width = size * scaleWidth;
  return Math.round(width);
};

const NormalizeHeight = (size: number) => {
  let height = size * scaleHeight;
  return Math.round(height);
};

const NormalizeFontSize = (f: number) => {
  const tempHeight = (16 / 9) * SCREEN_WIDTH;
  return (
    Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(SCREEN_WIDTH, 2)) * (f / 100)
  );
};

module.exports = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  NormalizeWidth,
  NormalizeHeight,
  NormalizeFontSize,
};
