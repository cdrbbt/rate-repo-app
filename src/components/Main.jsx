import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';
import SignOut from './SignOut';
import RepositoryView from './RepositoryView';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundPrimary
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
    <AppBar />
    <Switch>
      <Route path="/" exact>
        <RepositoryList />
      </Route>
      <Route path="/signIn" exact>
        <SignIn />
      </Route>
      <Route path="/signUp" exact>
        <SignUp />
      </Route>
      <Route path="/signOut" exact>
        <SignOut />
      </Route>
      <Route path="/createReview" exact>
        <ReviewForm />
      </Route>
      <Route path="/repos/:id">
        <RepositoryView />
      </Route>
      <Redirect to='/'/>
    </Switch>
    </View>
  );
};

export default Main;