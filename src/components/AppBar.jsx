import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab label="Repositories"/>
  </View>;
};

export default AppBar;