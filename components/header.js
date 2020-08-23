// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>My TO-DOs</Text> 
            </View>                                              
        </View>               
    )
}

const styles = StyleSheet.create({
    /* Style for the header */
    header: {
        position: 'relative',
        height: 100,
        paddingTop: 38,
        backgroundColor: '#11a9b0',
    },
    /* Style for the title of the header */
    title: {
        paddingTop: 20,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },   
});