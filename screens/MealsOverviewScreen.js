import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {MEALS} from '../data/dummy';
import Meal from '../components/Meal';
import MealList from '../components/MealList';

export default function MealsOverviewScreen({route}) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(item => {
    return item.categoryIds.indexOf(catId) >= 0;
  });
  
  return (
    <View>
      <MealList items={displayedMeals} />
    </View>
  );
}
