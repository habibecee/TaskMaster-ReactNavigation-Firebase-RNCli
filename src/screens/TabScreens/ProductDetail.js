import React from 'react';

import {SafeAreaView, View, Text, Button} from 'react-native';

import Header from '../../companents/Header/Header';

const ProductDetail = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Header title={'Ürün Detay'} />
      <View>
        <Text>Product Detail Screen</Text>
      </View>
      <Button
        title="Şifre Değiştir"
        onPress={() =>
          navigation.navigate('ProfileStack', {screen: 'ChangePassword'})
        }
      />
    </SafeAreaView>
  );
};

export default ProductDetail;
