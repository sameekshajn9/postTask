import React from 'react';
import { dimensionScreen, AppColors, getWidth, getHeight } from '../../theme';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Body, Left, Right } from 'native-base';

const Header = props => {
  const { title, right } = props;
  return (
    <View style={styles.parentWrapper}>
      <Left></Left>
      <Body>
        <Text
          style={{ fontSize: 18, fontWeight: '600', color: AppColors.white }}
        >
          {title}
        </Text>
      </Body>
      <Right>{right}</Right>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  parentWrapper: {
    height: Platform.OS === 'ios' ? 60 : 50,
    width: dimensionScreen.screenWidth,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: AppColors.labelColor,
    marginTop: 0
  },
  button: {
    height: getHeight(50),
    width: getWidth(12),
    tintColor: 'white'
  }
});
