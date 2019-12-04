import { dimensionScreen, getWidth, getHeight } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  parentWrapper: {
    height: dimensionScreen.screenHeight,
    width: dimensionScreen.screenWidth,
    backgroundColor: 'rgba(0, 0, 0 , 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  postCard: {
    borderRadius: 10,
    height: getHeight(Number(dimensionScreen.screenHeight / 2)),
    width: getWidth(Number(dimensionScreen.screenWidth - 50)),
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 8,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4
  },
  detailView: {
    flexDirection: 'row',
    height: getHeight(100),
    width: getWidth(Number(dimensionScreen.screenWidth - 50)),
    backgroundColor: 'red'
  }
});
