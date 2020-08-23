// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React, { useState }  from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');
    
    /* Change text as you type */
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Start typing to add...'
                onChangeText={ changeHandler }
            />
            <Button onPress={ () => submitHandler(text) } title='add todo' color='#11a9b0' />
        </View>
    )
}

const styles = StyleSheet.create({
    /* Style for the input field */
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: '#11a9b0',
    }
});
