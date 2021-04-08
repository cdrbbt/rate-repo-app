import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row'
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab label="Repositories" link="/"/>
      <AppBarTab label="SignIn" link="/signIn"/>
    </ScrollView>
  </View>;
};

export default AppBar;