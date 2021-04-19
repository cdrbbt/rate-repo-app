import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import Button from './Button';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username reqired'),
  password: yup.string().required('Password reqired'),
  passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Password confirm is required')
});

export const SignUpContainer = ({ signUp, history, signIn }) => {
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signUp({ username, password });
      console.log(data);
      await signIn({username, password});
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: ""
  };
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
    {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};


const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  return <SignUpContainer signUp={signUp} signIn={signIn} history={history} />;

};

const SignUpForm = ({ onSubmit }) => {

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
    <FormikTextInput name="username" placeholder="Username" style={styles.input} />
    <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.input}/>
    <FormikTextInput name="passwordConfirm" placeholder="Confirm Password" secureTextEntry style={styles.input}/>
    <Button
      label="Sign Up"
      testID="submit"
      onPress={onSubmit}
    />
    </View>
  );
};

export default SignUp;