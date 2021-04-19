import React from 'react';
import { useParams } from 'react-router-native';
import useRepository  from '../../hooks/useRepository';
import Text from '../Text';

import RepositoryItem from '../RepositoryItem';
import ReviewList from './ReviewList';
import { View } from 'react-native';


const RepositoryView = () => {
  const {id} = useParams();
  const {repository} = useRepository(id);
  console.log(repository);
  if (!repository) return <Text>{id}</Text>;

  return (
    <View>
      <RepositoryItem item = {repository} link />
      <ReviewList reviews={repository.reviews.edges}/>
    </View>
  );
};

export default  RepositoryView;