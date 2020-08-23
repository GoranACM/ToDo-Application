// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyModal() {

      return (
        <View>
            <View style={styles.modalItem}>
                <Text style={styles.modalText}>1. Click on the __________ line</Text>
            </View>
            <View style={styles.modalItem}>
                <Text>2. Start typing your TODO</Text>
            </View>
            <View style={styles.modalItem}>
                <Text style={styles.modalText}>3. Click the</Text> 
                <Button disabled={true} title={"ADD TODO"}/>
                <Text style={styles.modalText}>to create a new task!</Text>
            </View>
            <View style={styles.modalItem}>
                <Text style={styles.modalText}>4. Tick the </Text>
                <CheckBox
                    value={false}
                    disabled={true}
                    style={styles.checkbox}               
                />
                <Icon 
                    raised
                    name='arrow-right'
                    type='font-awesome'
                    style={styles.modalText}
                />
                <CheckBox
                    value={true}
                    disabled={true}
                    style={styles.checkbox}               
                />
                <Text style={styles.modalText}> to cross off a task!</Text>                                  
            </View>
            <View style={styles.modalItem}>
                <Text style={styles.modalText}>5. Click on any task to remove it! </Text>
            </View> 
             
        </View>                 
      );    
  }

  const styles = StyleSheet.create ({
    /* Lines on the info modal */
    modalItem: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: 'gray',
    },

    modalText: {
        textAlignVertical: 'center'
    },

    checkbox: {
        tintColor: 'black'
    },
  });