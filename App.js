import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    firestore()
      .collection('todos')
      .get()
      .then(res => {
        const TempData = [];

        res.docs.map(doc => {
          const TempTodo = {
            id: doc.id,
            ...doc.data(),
          };
          TempData.push(TempTodo);
        });
        console.log(TempData);
        setTodos(TempData);
      })
      .catch(err => console.log(err));
  }, []);

  if (todos === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={100} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      {todos.length === 0 ? (
        <View>
          <Text> THERE IS NOT TODOS YET! </Text>
        </View>
      ) : (
        <View>
          {todos?.map(todo => (
            <View key={todo?.id}>
              <Text> {todo?.text} </Text>
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
