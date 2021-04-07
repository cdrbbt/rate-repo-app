import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const RepositoryBaseInfo = ({ image, name, description, language }) => {
  console.log(image);
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 10
    },
    containerData :{
      paddingHorizontal: 10,
      width: 0,
      flexGrow: 1
    },
    repoImg: {
      width: 50,
      height: 50,
    },
    language: {
      backgroundColor: theme.colors.primary,
      borderRadius: 3,
      alignSelf: 'flex-start',
      padding: 3,
      color: 'white'
    }
  });
  return(
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.repoImg}/>
      <View style={styles.containerData}>
      <Text fontWeight="bold">{name}</Text>
      <Text color="textSecondary">{description}</Text>
      <Text style={styles.language}>{language}</Text>
      </View>
    </View>
  );
};

export default RepositoryBaseInfo;