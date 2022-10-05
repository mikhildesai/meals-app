import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function List({data}) {
  return (
    <View>
      {data.map(dataPoint => (
        <Text style={styles.dataPoint} key={dataPoint}>{dataPoint}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dataPoint: {
    backgroundColor: 'white',
    marginHorizontal: 28,
    marginVertical: 2,
    borderRadius: 6,
    textAlign: 'center',
    padding: 2,
  },
});
  