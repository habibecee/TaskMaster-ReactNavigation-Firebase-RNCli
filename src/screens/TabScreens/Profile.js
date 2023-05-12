import React from 'react';

import {SafeAreaView, View, Text, Button} from 'react-native';

import Header from '../../companents/Header/Header';

const Profile = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Header title={'Profil'} />
      <View>
        <Text>Profile</Text>
      </View>
      <Button
        title="Şifre Değiştir"
        onPress={() => navigation.navigate('ChangePassword')}
      />
    </SafeAreaView>
  );
};

export default Profile;
