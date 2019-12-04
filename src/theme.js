import { Dimensions, PixelRatio, Platform } from 'react-native';

export const AppColors = {
  white: 'white',
  labelColor: '#AD002C',
  buttonColor: '#AD0028',
  transparent: 'transparent',
  black: '#000000',
  voteGreen: 'rgb(96, 178, 89)'
};

export const dimensionScreen = {
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width
};

const designSizeWidth = 375;
const designSizeHeight = 812;
const cacheMap = new Map();

const { width: deviceScreenWidth, height: deviceScreenHeight } = Dimensions.get(
  'window'
);

/**
 * @method isIphoneX: Return true if device is Iphone X.
 */
export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
};

export const getWidth = function getWidth(imgWidth: number) {
  if (cacheMap.has(`w${imgWidth}`)) {
    return cacheMap.get(`w${imgWidth}`);
  }
  const requiredWidth = PixelRatio.roundToNearestPixel(
    (imgWidth / designSizeWidth) * deviceScreenWidth
  );
  cacheMap.set(`w${imgWidth}`, requiredWidth);
  return requiredWidth;
};

export const getHeight = function getHeight(imgHeight: number): number {
  if (cacheMap.has(`h${imgHeight}`)) {
    // $FlowFixMe
    return cacheMap.get(`h${imgHeight}`);
  }
  const requiredHeight = PixelRatio.roundToNearestPixel(
    (imgHeight / designSizeHeight) * deviceScreenHeight
  );
  cacheMap.set(`h${imgHeight}`, requiredHeight);
  return requiredHeight;
};
