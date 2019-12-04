import {
  dimensionScreen,
  AppColors,
  getHeight,
  getWidth,
  isIphoneX
} from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  parentWrapper: {
    height: dimensionScreen.screenHeight,
    width: dimensionScreen.screenWidth,
    backgroundColor: AppColors.white
  },
  postCard: {
    marginTop: 10,
    borderRadius: 5,
    padding: 0,
    shadowColor: '#000',
    shadowRadius: 4,
    marginHorizontal: 10,
    elevation: 8,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    padding: 10
  },
  detailView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  addImage: {
    height: getHeight(60),
    width: getHeight(60),
    borderRadius: getHeight(30),
    tintColor: AppColors.labelColor
  },
  addWrapper: {
    backgroundColor: 'white',
    height: getHeight(60),
    width: getHeight(60),
    borderRadius: getHeight(30),
    position: 'absolute',
    bottom: isIphoneX() ? getHeight(60) : getHeight(40),
    right: getWidth(20),
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4
  },
  logoutButton: {
    height: getHeight(80),
    width: getWidth(20),
    tintColor: 'white'
  },
  contentContainerStyle: {
    paddingBottom: isIphoneX() ? getHeight(110) : getHeight(90)
  }
});
