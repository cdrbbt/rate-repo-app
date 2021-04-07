import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const AppBarTab = ({ label }) => {

  const styles = StyleSheet.create({
    button: {
      margin: 10,
    }
  });

  return (
    <Pressable style={styles.button}>
      <Text 
        style={styles.text}
        color="primary"
        fontSize="subheading"
        fontWeight="bold"
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;