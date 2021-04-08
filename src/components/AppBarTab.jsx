import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ label, link }) => {

  const styles = StyleSheet.create({
    button: {
      padding: 10,
    }
  });

  return (
    <Link to={link} underlayColor="#00000040" style={styles.button}>
      <Text 
        style={styles.text}
        color="primary"
        fontSize="subheading"
        fontWeight="bold"
      >
        {label}
      </Text>
    </Link>
  );
};

export default AppBarTab;