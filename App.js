// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, FlatList, Platform, Modal, Button, Alert, AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "./components/header";
import AddTodo from './components/addToDo';
import ToDoCard from './components/toDoCard';
import MyModal from './components/modal';

import { mainStyle } from './styles/mainStyle';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const STORAGE_KEY = '@saveTodo'

  const [todos, setTodos]  = useState([
    
  ]);

  /* Replace the didMount */
  useEffect(() => {
    loadList()
  }, [])

  /* Press to delete a todo and then save the list */
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
    saveList()
  }

  /* Create a new todo on button click and save to the list */
  const submitHandler = (text) => {
    /* Check if the input has at least 2 characters */
    if (text.length > 2) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: new Date().getTime().toString() },
          ...prevTodos,     
        ];
      })
    } else {
      /* Warn user about the ampunt of characters */
      Alert.alert('OOPS!', 'ToDo must be more than 3 letters long...', [
        {text: 'Got it!', onPress: () => console.log('alert closed')}
      ]);
      
    }  
    saveList()
  }

  /* Saving the list of todos */
  const saveList = async (todos) => {
    try {
      const jsonValue = JSON.stringify(todos)
      await AsyncStorage.setItem(
        STORAGE_KEY,
        jsonValue
      )
    }
    catch( error ) {
      console.log(error)
    }
  }

  /* Loading the list of todos */
  const loadList = async () => {
    try{
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    }
    catch(error) {
      console.log(error)
    }
  }

  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();  /* Keyboard dismiss on side press */
    }}>
    
      <View style={ mainStyle.container }>
        <Header />
          <Icon style={ mainStyle.infoButton }
            raised
            name='info-circle'
            type='font-awesome'
            color='#fff'
            onPress={ () => setModalVisible(!modalVisible) } 
          />
          <Modal
            animationType="fade"
            transparent={true}
            visible={ modalVisible }
          >
            <View style={ mainStyle.modalBackground }>
                <View style={ mainStyle.modal }>
                  <View style={ mainStyle.modalTitle }>
                    <Text style={ mainStyle.modalTitleText }>HOW TO USE THE APP</Text>
                  </View>
                  <MyModal />
                  <View style={ mainStyle.modalButton }>
                    <Button title={ "OKAY" } onPress={ () => { setModalVisible(!modalVisible) }} color={'#11a9b0'}/>
                  </View>                
                </View>                               
            </View>
          </Modal>         
        <View style={ mainStyle.content }>        
          <AddTodo submitHandler={ submitHandler }/>
          <View style={ mainStyle.list }>
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
