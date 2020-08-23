// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React, { useState }  from 'react';
import { View, TextInput, Button } from 'react-native';

import { addToDoStyle } from '../styles/addToDoStyle'

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');
    
    /* Change text as you type */
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={addToDoStyle.input}
                placeholder='Start typing to add...'
                onChangeText={ changeHandler }
            />
            <Button onPress={ () => submitHandler(text) } title='add todo' color='#11a9b0' />
        </View>
    )
}

