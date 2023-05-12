import React from 'react';

import {SafeAreaView, View, Text, Button} from 'react-native';

import Header from '../../companents/Header/Header';

const ListProducts = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Header title={'Ürünleri Listele'} />
      <View>
        <Text>List Products Screen</Text>
      </View>
      <Button
        title="Ürün Detayına Git"
        onPress={() => navigation.navigate('ProductDetail')}
      />
    </SafeAreaView>
  );
};

export default ListProducts;
