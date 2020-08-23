// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React, {useState} from 'react';
import { Text, View, TouchableOpacity, CheckBox } from 'react-native';

import { toDoCardStyle } from '../styles/toDoCardStyle'

export default function ToDoCard({ item, pressHandler }) {
    
    const [isSelected, setSelection] = useState(false);

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={[
                toDoCardStyle.item,
                /* Change color of todo card on checkbox check */
                {backgroundColor: isSelected ? "#11a9b0" : "white"}
            ]}>
                <View style={toDoCardStyle.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}                                     
                    /> 
                </View>               
                <Text 
                    style={[
                        /* Swap the text strikethrough on checkbox click */
                        {textDecorationLine: isSelected ? "line-through" : "none"},
                        toDoCardStyle.itemText,
                    ]}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

