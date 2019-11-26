import React from 'react';
import { Text, View } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home'


const Tab=createBottomTabNavigator()


export default function Nav(){
    
    return(
    <NavigationNativeContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />

        </Tab.Navigator>
    </NavigationNativeContainer>

    )
}