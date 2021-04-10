import React, { useEffect } from 'react';
import { useHistory } from 'react-router-native';

import Text from './Text';
import useSignOut from '../hooks/useSignOut';


//attempt at making a component that would sign out and then redirect to main
const SignOut = () => {
  const signOut = useSignOut();
  const history = useHistory();

  const logOut = async () => {  
    signOut();
    history.push('/');
  };

  useEffect( () => {logOut();}, []);

  return <Text>Logging out</Text>;
};

export default SignOut;