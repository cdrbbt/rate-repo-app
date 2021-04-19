import React from 'react';
import {FlatList} from 'react-native';
import Review from './Review';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height:10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;


const ReviewList = ({reviews}) => {
  const reviewData = reviews.map(review => review.node);
  console.log(reviews);
  return <FlatList
    data={reviewData}
    ItemSeparatorComponent={ItemSeparator}
    ListHeaderComponent={ItemSeparator}
    renderItem={({item}) => <Review review={item}/>}
  />;
};

export default ReviewList;