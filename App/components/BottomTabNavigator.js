import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Home from '../screen/Home'
import Profile from '../screen/Profile'
import News from '../screen/News'
import Explore from '../screen/Explore'


export default function BottomTabNavigator() {
    const Tab = createMaterialBottomTabNavigator()
    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#fff"
                shifting={true}
                barStyle={{ backgroundColor: '#009387' }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}

                    options={{
                        tabBarLabel: 'Home',
                        tabBarColor: '#009387',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarColor: 'red',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="News"
                    component={News}
                    options={{
                        tabBarLabel: 'News',
                        tabBarColor: 'orange',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bell" color={color} size={26} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Explore"
                    component={Explore}
                    options={{
                        tabBarLabel: 'Explore',
                        tabBarColor: 'purple',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="map" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    )
}
