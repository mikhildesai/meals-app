import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MealDetail from './MealDetail';

export default function Meal({
  id,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
}) {
  const navigation = useNavigation();
  function navigationHandler() {
    navigation.navigate('MealDetails', {
      mealId: id,
    });
  }

  return (

    <View style={styles.mealContainer}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [pressed ? styles.button : null]}
        onPress={navigationHandler}>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },

  mealContainer: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  button: {
    opacity: 0.5,
  },
});
