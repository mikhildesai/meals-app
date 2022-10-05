import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {FavouriteContext} from '../store/context/favorites-context';
import {MEALS} from '../data/dummy';
import MealList from '../components/MealList';

export default function FavouriteScreen() {
  const fav = useContext(FavouriteContext);

  const favMeals = MEALS.filter(meal => fav.ids.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Don't have any Favourite Meals Yet!</Text>
      </View>
    );
  }
  return (
    <View>
      <MealList items={favMeals} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
