import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Header from '../companents/Header/Header';

const HomeScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Header title={'Anasayfa'} />
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Kategorileri Gör"
          onPress={() => navigation.navigate('Categories')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
