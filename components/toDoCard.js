// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CheckBox, AsyncStorage  } from 'react-native';
//import CheckBox from '@react-native-community/checkbox';

export default function ToDoCard({ item, pressHandler }) {
    const [isSelected, setSelection] = useState(false);

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={[
                styles.item,
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
                        {textDecorationLine: isSelected ? "line-through" : "none"},
                        styles.itemText,
                    ]}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

    itemText: {
        fontSize: 22,
        marginLeft: 10,
    },

    checkboxContainer: {
        flexDirection: "row",
        borderRadius: 50
    },

});