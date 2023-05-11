import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const StackMenu = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CategoriesStack')}>
        <Text>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileStack')}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StackMenu;
