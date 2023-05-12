import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStackScreen from '../screens/StackScreens/HomeStackScreen';
import CategoriesStackScreen from '../screens/StackScreens/CategoriesStackScreen';
import ProfileStackScreen from '../screens/StackScreens/ProfileStackScreen';

const Stack = createStackNavigator();

const StackNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{title: 'Anasayfa'}}
      />
      <Stack.Screen
        name="CategoriesStack"
        component={CategoriesStackScreen}
        options={{title: 'Kategoriler'}}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{title: 'Profil'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
