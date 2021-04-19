import React from 'react';
import { View, StyleSheet} from 'react-native';
import Text from './Text';

const Detail = ({ lable, number }) => {

  //Intl polyfilled but working incorrectly, could be fixed by build configuration but would require ejecting from expo
  //const formatter = new Intl.NumberFormat('en', {notation: 'compact'});

  const format = (n) => {
    if (n < 1000) return n;
    return (n/1000).toFixed(1).concat('K');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    }
  });

  return (
    <View style={styles.container} testID="socialData">
      <Text fontWeight="bold">{format(number)}</Text>
      <Text color="textSecondary">{lable}</Text>
    </View>
  );
};

const RepositorySocialDetails = ({ stars, forks, reviews, rating }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-around'
    }
  });
  return (
    <View style={styles.container} testID="socialInfo">
      <Detail lable="Stars" number={stars}/>
      <Detail lable="Forks" number={forks}/>
      <Detail lable="Reviews" number={reviews}/>
      <Detail lable="Rating" number={rating}/>
    </View>
  );
};

export default RepositorySocialDetails;