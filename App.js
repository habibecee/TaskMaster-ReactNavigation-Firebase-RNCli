import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/router/BottomTab';
import StackNavigator from './src/router/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* <BottomTab /> */}
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
