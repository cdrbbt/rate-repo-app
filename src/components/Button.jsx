import React from 'react';
import Text from './Text';
import { Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: theme.colors.primary,
    margin: 5,
    paddingVertical: 10,
    fontWeight: theme.fontWeights.bold,
    color: "white"
  }
});

const Button = ({ onPress, label, ...props}) => {
  return <Pressable onPress={onPress} {...props}>
    <Text style={styles.button}>{label}</Text>
  </Pressable>;
};

export default Button;