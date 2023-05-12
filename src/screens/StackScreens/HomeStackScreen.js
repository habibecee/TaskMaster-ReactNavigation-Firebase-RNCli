import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import StackMenu from '../../companents/StackMenu/StackMenu';
import {GeneralStyles} from '../../utils/GeneralStyles';

const HomeStackScreen = ({navigation, route}) => {
  return (
    <View style={GeneralStyles.body}>
      <Text>Home Stack Screen</Text>
      {/* <Button
        title="Go Profile"
        onPress={() => navigation.navigate('ProfileStack')}
      /> */}
      <StackMenu navigation={navigation} />
    </View>
  );
};

export default HomeStackScreen;
