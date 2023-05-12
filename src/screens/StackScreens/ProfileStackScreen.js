import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import StackMenu from '../../companents/StackMenu/StackMenu';
import {GeneralStyles} from '../../utils/GeneralStyles';

const ProfileStackScreen = ({navigation, route}) => {
  return (
    <View style={GeneralStyles.body}>
      <Text>Profile Stack Screen</Text>
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default ProfileStackScreen;
