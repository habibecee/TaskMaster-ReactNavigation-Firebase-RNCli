import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import StackMenu from '../../companents/StackMenu/StackMenu';
import {GeneralStyles} from '../../utils/GeneralStyles';

const CategoriesStackScreen = ({navigation, route}) => {
  return (
    <View style={GeneralStyles.body}>
      <Text>Categories Stack Screen</Text>
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default CategoriesStackScreen;
