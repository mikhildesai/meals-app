import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

export default function CategoryGridTile({title, color, pressHandler}) {
  return (
    <View style={[styles.tileContainer, {backgroundColor: color}]}>
      <Pressable
        style={styles.button}
        android_ripple={{color: 'white'}}
        onPress={pressHandler}>
        <View style={styles.tile}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  tile: {
    flex: 1,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    
  },
});
