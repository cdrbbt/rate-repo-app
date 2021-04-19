import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import RepositorySocialDetails from './RepositorySocialDetails';
import RepositoryBaseInfo from './RepositoryBaseInfo';
import theme from '../theme';
import Button from './Button';

const RepositoryItem = ({ item, link=null }) => {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: theme.colors.backgroundSecondary,
    }
  });

  const linkToHub = () => {
    if (link) {
      Linking.openURL(item.url);
    }
  };


  return (
    <View style={styles.container} testID="repoItem">
      <RepositoryBaseInfo 
        image={item.ownerAvatarUrl}
        name={item.fullName}
        description={item.description}
        language={item.language}
      />
      <RepositorySocialDetails
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
      />
      {link && <Button onPress={linkToHub} label="Open in GitHub" />}
    </View>
  );
};

export default RepositoryItem;