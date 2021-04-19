import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import Button from './Button';


const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Owner name required'),
  repositoryName: yup.string().required('Repository name required'),
  rating: yup.number().min(0, 'Rating must not be lower than 0').required('Rating required').max(100,'Rating must not exceed 100'),
  text: yup.string().optional()
});

const ReveiwForm = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();
  const initialValues = {
    repositoryName: '',
    ownerName: '',
    rating: '',
    text: ''
  };

  const onSubmit = async (values) => {
    console.log(values);
    const data = await createReview(values);
    history.push(`/repos/${data.createReview.repository.id}`);
    console.log(data);
  };

  return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({handleSubmit}) => <ReviewFormFields onSubmit={handleSubmit}/>}
  </Formik>;
};

//shares format with signin form, styles should be extracted later
const ReviewFormFields = ({onSubmit}) => {

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
    <FormikTextInput name="ownerName" placeholder="Repository owner name" style={styles.input} />
    <FormikTextInput name="repositoryName" placeholder="Repository name" style={styles.input} />
    <FormikTextInput name="rating" placeholder="Rating" keyboardType='numeric' style={styles.input} />
    <FormikTextInput name="text" placeholder="Review" style={styles.input} multiline/>
    <Button
      label="Post Review"
      onPress={onSubmit}
    />
    </View>
  );
};

export default ReveiwForm;