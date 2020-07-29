// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import Header from "./components/header";
import AddTodo from './components/addToDo';
import ToDoCard from './components/toDoCard';

export default function App() {

  const [todos, setTodos]  = useState([
    
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if (text.length > 2) {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  } else {
    Alert.alert('OOPS!', 'ToDo must be more than 3 letters long...', [
      {text: 'Got it!', onPress: () => console.log('alert closed')}
    ]);
  }
}

  return (
    
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();  /* Keyboard dismiss on side press */
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View>
            <FlatList 
              data={ todos }
              renderItem={({ item }) => (
                <ToDoCard item={ item } pressHandler={ pressHandler }/>
              )}  
            />
          </View>
          <StatusBar />
        </View>
     
      </View>   
      
    </TouchableWithoutFeedback>
     
  );
}

const styles = StyleSheet.create({
  /* Style for the whole page */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /* Style for the body/content */
  content: {
    flex: 1,
    padding: 40,
  },
  /* Style for the list */
  list: {
    flex: 1,
    marginTop: 20,
  }
});
