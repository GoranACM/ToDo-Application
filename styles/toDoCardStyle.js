// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import { StyleSheet } from 'react-native';

export const toDoCardStyle = StyleSheet.create({
    /* Style for the todo card */
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#11a9b0',
        borderRadius: 10,
    },
    /* Style for the text in the todo card */
    itemText: {
        fontSize: 21,
        marginLeft: 10,
    },
    /* Style for the checkbox container */
    checkboxContainer: {
        flexDirection: "row",
        borderRadius: 50
    },

});