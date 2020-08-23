// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React, { useState }  from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Start typing to add...'
                onChangeText={ changeHandler }
                ref={(input) => (_textInput = input)}
            />
            <Button onPress={ () => submitHandler(text) } title='add todo' color='#11a9b0' />
            <View>
                <Toast style={{backgroundColor:'red'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'red'}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: '#11a9b0',
    }
});
