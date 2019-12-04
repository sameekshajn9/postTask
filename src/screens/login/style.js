import { StyleSheet } from 'react-native';
import { dimensionScreen, AppColors, getHeight, getWidth } from '../../theme';

export const styles = StyleSheet.create({
  parentWrapper: {
    height: dimensionScreen.screenHeight,
    width: dimensionScreen.screenWidth,
    backgroundColor: AppColors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginCard: {
    height: getHeight(417),
    width: getWidth(319),
    backgroundColor: AppColors.white,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowRadius: 4,
    paddingHorizontal: getWidth(20),
    elevation: 8,
    justifyContent: 'flex-end',
    paddingBottom: getHeight(20)
  },
  labelText: {
    color: AppColors.labelColor,
    fontSize: 8
  },
  textInputWrapper: {
    fontSize: 18,
    paddingVertical: getHeight(3)
  },
  addDetailWrapper: {
    height: getHeight(43),
    marginTop: getHeight(10)
  },
  loginButton: {
    height: getHeight(45),
    width: getWidth(180),
    borderRadius: getHeight(23),
    backgroundColor: AppColors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: getHeight(20)
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 14
  },
  connectWithWrapper: {
    marginTop: getHeight(39),
    alignSelf: 'center',
    flexDirection: 'row',
    height: getHeight(15),
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  signMethods: {
    marginTop: getHeight(15),
    alignSelf: 'center',
    flexDirection: 'row',
    height: getHeight(50),
    paddingHorizontal: getWidth(20),
    alignItems: 'center'
  },
  lineView: {
    height: 1,
    flex: 1,
    backgroundColor: '#CCC9C9'
  },
  inputLine: {
    height: 1,
    backgroundColor: '#B6B6B5'
  }
});
