import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Icon from 'react-native-vector-icons/Ionicons';

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
        name="Categories"
        component={CategoriesScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default BottomTab;
