import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarActiveBackgroundColor: 'blue',
        tabBarInactiveTintColor: 'green',
        tabBarInactiveBackgroundColor: 'yellow',
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          title: 'Anasayfa',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default Navigation;
