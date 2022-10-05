import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function MealDetail({duration, complexity, affordability}) {
  return (
    <View style={styles.smallContainer}>
      <Text>{duration}m</Text>
      <Text>{complexity.toUpperCase()}</Text>
      <Text>{affordability.toUpperCase()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  smallContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 4,
  },
});
