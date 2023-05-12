import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Text style={styles.Title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    textAlign: 'center',
  },
  Title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
