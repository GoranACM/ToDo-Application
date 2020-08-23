// Created by Goran Ilievski
// Student ID 7108
// Academy of Information Technology
// 2020

import React from 'react';
import { Text, View } from 'react-native';

import { headerStyle } from '../styles/headerStyle'

export default function Header() {
    return (
        <View style={headerStyle.header}>
            <View>
                <Text style={headerStyle.title}>My TO-DOs</Text> 
            </View>                                              
        </View>               
    )
}