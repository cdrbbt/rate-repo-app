import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

import useAuthCheck from '../hooks/useAuthCheck';

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
  const [auth, loading] = useAuthCheck();
  console.log('loading', loading);
  console.log(auth);

  const loggedIn = loading ? false : auth;
  console.log('login', loggedIn);
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab label="Repositories" link="/"/>
      {loggedIn
      ? <AppBarTab label="Sign Out" link="/signOut"/>
      : <AppBarTab label="Sign In" link="/signIn"/>
      }

    </ScrollView>
  </View>;
};

export default AppBar;