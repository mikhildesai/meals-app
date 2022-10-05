import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Meal from './Meal';

export default function MealList({items}) {
  function renderMeals(itemData) {
    const item = itemData.item;
    const mealsProps = {
      id: item.id,
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      duration: item.duration,
    };
    return <Meal {...mealsProps} />;
  }
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
}
