// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CheckBox } from 'react-native';

export default function ToDoCard({ item, pressHandler }) {
    
    const [isSelected, setSelection] = useState(false);

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={[
                styles.item,
                /* Change color of todo card on checkbox check */
                {backgroundColor: isSelected ? "#11a9b0" : "white"}
            ]}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}                                     
                    /> 
                </View>               
                <Text 
                    style={[
                        /* Swap the text strikethrough on checkbox click */
                        {textDecorationLine: isSelected ? "line-through" : "none"},
                        styles.itemText,
                    ]}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 22,
        marginLeft: 10,
    },
    /* Style for the checkbox container */
    checkboxContainer: {
        flexDirection: "row",
        borderRadius: 50
    },

});