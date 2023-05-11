import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import StackMenu from '../../companents/StackMenu/StackMenu';

const CategoriesStackScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>Categories Stack Screen</Text>
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default CategoriesStackScreen;
