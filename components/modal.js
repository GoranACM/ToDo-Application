// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyModal() {

      return (
        <View>
            <View style={styles.modalItem}>
                <Text>1. Click on the __________ line</Text>
            </View>
            <View style={styles.modalItem}>
                <Text>2. Start typing your TODO</Text>
            </View>
            <View style={styles.modalItem}>
                <Text>3. Click the </Text> 
                <Button disabled={true} title={"ADD TODO"} width={10}/>
                <Text> to create a new task!</Text>
            </View>
            <View style={styles.modalItem}>
                <Text>4. Tick the </Text>
                <CheckBox
                    value={false}
                    disabled={true}
                    style={styles.checkbox}               
                />
                <Icon 
                    raised
                    name='arrow-right'
                    type='font-awesome'
                />
                <CheckBox
                    value={true}
                    disabled={true}
                    style={styles.checkbox}               
                />
                <Text> to cross off a task!</Text>                                  
            </View>
            <View style={styles.modalItem}>
                <Text>5. Click on any task to remove it! </Text>
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
        borderBottomColor: 'gray'
    },
  });