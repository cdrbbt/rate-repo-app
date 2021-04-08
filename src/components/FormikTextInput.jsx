import { useField } from 'formik';
import React from 'react';
import { TextInput, StyleSheet, Text} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error
  },
  errorBorder: {
    borderColor: theme.colors.error
  }
});

const FormikTextInput = ({ name, ...props }) => {

  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const style = [props.style, showError && styles.errorBorder];
  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={style}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;