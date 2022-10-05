import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({navigation}) {
  
  const renderCategories = itemData => {
    function pressHandler() {
        navigation.navigate('MealsOverview', {categoryId: itemData.item.id});
      }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        pressHandler={pressHandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategories}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}
