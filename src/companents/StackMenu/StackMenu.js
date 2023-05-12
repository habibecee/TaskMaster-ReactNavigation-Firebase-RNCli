import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StackMenu = ({navigation, route}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      {isOpen && (
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesStack')}>
            <Text style={styles.menuItemText}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileStack')}>
            <Text style={styles.menuItemText}>Profile</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Icon
          name={isOpen ? 'arrow-down-circle' : 'arrow-up-circle'}
          size={40}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'flex-end',
  },

  menuWrapper: {
    borderWidth: 1,
    padding: 10,
    gap: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default StackMenu;
