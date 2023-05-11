import React from 'react';
import {StyleSheet} from 'react-native';
import Navigation from './src/Navigation';

import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
