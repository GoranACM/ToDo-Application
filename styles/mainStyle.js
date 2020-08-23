// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import { StyleSheet, Platform } from 'react-native';

export const mainStyle = StyleSheet.create({
    /* Style for the whole page */
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    /* Style for the body/content */
    content: {
      flex: 1,
      padding: 40,
      paddingBottom: 10
    },
    /* Style for the list */
    list: {
      flex: 1,
      marginTop: 10,
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
      marginLeft: Platform.OS === 'ios' ? 30 : 40,
      marginRight: Platform.OS === 'ios' ? 30 : 40,
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