import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Header from '../companents/Header/Header';

const CategoriesScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Header title={'Kategoriler'} />
      <View>
        <Text>Categories Screen</Text>
        <Button
          title="Anasayfaya Dön"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
