/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useContext, useLayoutEffect, useState} from 'react';
import {MEALS} from '../data/dummy';
import MealDetail from '../components/MealDetail';
import List from '../components/List';
import {FavouriteContext} from '../store/context/favorites-context';

export default function MealDetails({route, navigation}) {
  const mealId = route.params.mealId;
  const selectedMeals = MEALS.find(meal => meal.id === mealId);

  const favCntx = useContext(FavouriteContext);
  const mealIsFavourite = favCntx.ids.includes(mealId);

  function pressHandler() {
    if (mealIsFavourite) {
      favCntx.removeFavourite(mealId);
    } else {
      favCntx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={pressHandler}>
            <Image
              source={
                mealIsFavourite
                  ? require('../assets/filled.png')
                  : require('../assets/outlined.png')
              }
            />
          </Pressable>
        );
      },
    });
  }, [navigation, pressHandler]);

  return (
    <ScrollView>
      <Image
        source={{uri: selectedMeals.imageUrl}}
        style={{width: '100%', height: 250}}
      />
      <View>
        <Text style={styles.title}>{selectedMeals.title}</Text>
        <MealDetail
          duration={selectedMeals.duration}
          complexity={selectedMeals.complexity}
          affordability={selectedMeals.affordability}
        />
        <View>
          <Text style={styles.subTitle}>Ingredients</Text>
          <List data={selectedMeals.ingredients} />
        </View>
        <View>
          <Text style={styles.subTitle}>Steps</Text>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
