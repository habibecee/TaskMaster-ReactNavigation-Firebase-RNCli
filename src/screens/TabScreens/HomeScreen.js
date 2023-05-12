import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Header from '../../companents/Header/Header';

const HomeScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Header title={'Anasayfa'} />
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Ürün Detay Gör"
          onPress={() =>
            navigation.navigate('ProductsStack', {
              screen: 'ProductDetail',
              params: {id: '1'},
            })
          }
        />
        <Button
          title="Profil Detay"
          onPress={() =>
            navigation.navigate('ProfileStack', {screen: 'ChangePassword'})
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
