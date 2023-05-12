import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import CategoriesScreen from '../screens/TabScreens/CategoriesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 90, paddingBottom: 20},
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          title: 'Anasayfa',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 16 : 14,
                color: focused ? 'green' : 'gray',
              }}>
              Anasayfa
            </Text>
          ),

          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={focused ? 24 : 20}
              color={focused ? 'green' : 'gray'}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'Kategoriler',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 16 : 14,
                color: focused ? 'purple' : 'gray',
              }}>
              Kategoriler
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'list-circle' : 'list-circle-outline'}
              size={focused ? 24 : 20}
              color={focused ? 'purple' : 'gray'}
            />
          ),
        }}
        name="ProductsStack"
        component={CategoriesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 16 : 14,
                color: focused ? 'red' : 'gray',
              }}>
              Profil
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={focused ? 24 : 20}
              color={focused ? 'red' : 'gray'}
            />
          ),
        }}
        name="ProfileStack"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default BottomTab;
