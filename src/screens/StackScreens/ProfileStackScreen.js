import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import StackMenu from '../../companents/StackMenu/StackMenu';

const ProfileStackScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>Profile Stack Screen</Text>
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default ProfileStackScreen;
