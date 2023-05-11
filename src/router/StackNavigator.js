import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStackScreen from '../screens/StackScreens/HomeStackScreen';
import CategoriesStackScreen from '../screens/StackScreens/CategoriesStackScreen';
import ProfileStackScreen from '../screens/StackScreens/ProfileStackScreen';

const Stack = createStackNavigator();

const StackNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeStackScreen} />
      <Stack.Screen name="CategoriesStack" component={CategoriesStackScreen} />
      <Stack.Screen name="ProfileStack" component={ProfileStackScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
