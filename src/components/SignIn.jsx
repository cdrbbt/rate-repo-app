import React from 'react';
import { Formik } from 'formik';
import {Pressable, View, StyleSheet} from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';


import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username reqired'),
  password: yup.string().required('Password reqired')
});


const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    username: "",
    password: ""
  };
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
    {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

const SignInForm = ({ onSubmit }) => {

  const styles = StyleSheet.create({
    form: {
      alignItems: 'stretch'
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
      fontSize: theme.fontSizes.body,
      marginVertical: 8,
      marginHorizontal: 8,
      padding: 10
    },
    button: {
      textAlign: 'center',
      backgroundColor: theme.colors.primary,
      margin: 5,
      paddingVertical: 10,
      fontWeight: theme.fontWeights.bold,
      color: "white"
    }
  });
  return (
    <View style={styles.form}>
    <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
    <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.input}/>
    <Pressable onPress={onSubmit}>
      <Text style={styles.button}>Log in</Text>
    </Pressable>
    </View>
  );
};

export default SignIn;