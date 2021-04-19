import React from 'react';
import { View, StyleSheet } from 'react-native';
import {format, parseISO} from 'date-fns';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container:{
    backgroundColor: theme.colors.backgroundSecondary,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    borderRadius: 25,
    borderColor: theme.colors.primary,
    borderWidth: 4,
    width: 50,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 10
  }
});

const Review = ({review}) => {
  return <View style={styles.container}>
  <ReviewHeader review={review}/>
  <Text>{review.text}</Text>
  </View>;
};


const ReviewHeader = ({review}) => {
  console.log(review.createdAt);
  const date = format(parseISO(review.createdAt), 'dd.mm.yyyy');

  return <View style={styles.header}>
    <Rating rating={review.rating}/>
    <View>
      <Text fontWeight="bold">{review.user.username}</Text>
      <Text color="textSeconday">{date}</Text>
    </View>
  </View>;
};

const Rating = ({rating}) => {
  return <View style={styles.rating}>
    <Text fontWeight="bold">{rating}</Text>
  </View>;
};

export default Review;