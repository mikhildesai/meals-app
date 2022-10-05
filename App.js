/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';

import {Pressable, StyleSheet, Text, Touchable, View} from 'react-native';
import {CATEGORIES} from './data/dummy';
import CategoriesScreen from './screens/CategoriesScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import MealDetails from './screens/MealDetails';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import FavouriteContextProvider from './store/context/favorites-context';
import {Image} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
}



function App() {
  return (
    <>
      <NavigationContainer>
        <FavouriteContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#3c43a3'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#aebff2'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={MyNavigator}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen name="All Categories" component={CategoriesScreen} /> */}
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={({route, navigation}) => {
                const id = route.params.categoryId;
                const catTitle = CATEGORIES.find(
                  category => category.id === id,
                ).title;
                return {
                  title: catTitle,
                };
              }}
            />

            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
              
            />
          </Stack.Navigator>
        </FavouriteContextProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
