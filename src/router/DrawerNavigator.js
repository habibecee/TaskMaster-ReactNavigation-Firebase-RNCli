import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeDrawerScreen from '../screens/DrawerScreens/HomeDrawer';
import CategoriesDrawerScreen from '../screens/DrawerScreens/CategoriesDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNavigator>
      <Drawer.Screen name="HomeDrawer" component={HomeDrawerScreen} />
      <Drawer.Screen
        name="CategoriesDrawer"
        component={CategoriesDrawerScreen}
      />
    </DrawerNavigator>
  );
};

export default DrawerNavigator;
