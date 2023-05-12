import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListProducts from './ListProducts';
import ProductDetail from './ProductDetail';

const Stack = createStackNavigator();

const CategoriesScreen = props => {
  return (
    <Stack.Navigator
      initialRouteName="ListProducts"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListProducts" component={ListProducts} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default CategoriesScreen;
