// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, FlatList, Platform, Modal, Button, Alert, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "./components/header";
import AddTodo from './components/addToDo';
import ToDoCard from './components/toDoCard';
import MyModal from './components/modal';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);


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
        { text: text, key: new Date().getTime().toString() },
        ...prevTodos,
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
    
      <View style={ styles.container }>
        <Header />
          <Icon style={styles.infoButton}
            raised
            name='info-circle'
            type='font-awesome'
            color='#fff'
            onPress={() => setModalVisible(!modalVisible)} 
          />
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.modalBackground}>
                <View style={styles.modal}>
                  <View style={styles.modalTitle}>
                    <Text style={styles.modalTitleText}>HOW TO USE THE APP</Text>
                  </View>
                  <MyModal />
                  <View style={styles.modalButton}>
                    <Button title={"OKAY"} onPress={ () => { setModalVisible(!modalVisible) }} color={'#11a9b0'}/>
                  </View>                
                </View>                               
            </View>
          </Modal>         
        <View style={ styles.content }>        
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
  },
  /* Style for info button */
  infoButton: {
    position: 'absolute',
    marginTop: 55,
    right: 35,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  /* Style for modal background */
  modalBackground: {
    backgroundColor: "#000000aa", 
    flex: 1,
  },
  /* Style for the modal pop-up*/
  modal: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      backgroundColor: "#ffffff",
      marginLeft: 40,
      marginRight: 40,
      marginTop: Platform.OS === 'ios' ? 160 : 200,
      marginBottom: Platform.OS === 'ios' ? 160 : 200,
      borderRadius: 10,
  },
  /* Title in the info modal */
  modalTitle: {
    borderBottomWidth: 3,
    paddingBottom: 10,
    borderBottomColor: 'gray'
  },
  modalTitleText: {
    textAlign: 'center',
    fontSize: 25,   
  },
  /* Button to close modal */
  modalButton: {
    marginLeft: 40,
    marginRight: 40,
  }
});
