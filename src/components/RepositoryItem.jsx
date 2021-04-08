import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositorySocialDetails from './RepositorySocialDetails';
import RepositoryBaseInfo from './RepositoryBaseInfo';
import theme from '../theme';

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: theme.colors.backgroundSecondary,
    }
  });

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default RepositoryItem;