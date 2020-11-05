import React from 'react'
import { View, Text } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import HomeStackScreen from '../screen/Home';
import HomeProfile from '../screen/HomeProfile';

export default function ProfileTopTabNavigator() {

    const Tab = createMaterialTopTabNavigator();


    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeProfile" component={HomeProfile} />
            {/* <Tab.Screen name="Home" component={HomeProfile} />
            <Tab.Screen name="Home" component={HomeProfile} /> */}
        </Tab.Navigator>
        
    )
}
