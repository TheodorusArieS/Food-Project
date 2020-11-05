import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native'
import { Avatar } from 'react-native-paper'
import { max } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ProfileTopTabNavigator from '../components/ProfileTopTabNavigator'
import HomeProfile from './HomeProfile'
import Explore from './Explore'

const Tabs = createMaterialTopTabNavigator()
function Profile({ navigation }) {
    return (
        <Tabs.Navigator tabBarOptions={
            {
                activeTintColor:'blue',
                inactiveTintColor:'#dedede',
              
            }
        }>
            <Tabs.Screen name="Home Profile" component={HomeProfile} />
            <Tabs.Screen name="Explore" component={Explore} />
        </Tabs.Navigator>
    )
}

function ProfileStackScreen({ navigation }) {
    return (
        <>
            <ProfileStack.Navigator>
                <ProfileStack.Screen name="Profile" component={Profile} options={{

                    header: () => {
                        return (
                            <View style={{ minHeight: 55 }}>
                                <ImageBackground source={{ uri: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={{ width: window.width }} >
                                    <View style={{ flexDirection: 'row', paddingTop: 7, justifyContent: 'space-between' }}>
                                        <View style={{ flex: 1, marginTop: 7, marginLeft: 4 }}>
                                            <MaterialIcon name="menu" size={25} color='#fff' onPress={() => navigation.openDrawer()} />
                                        </View>
                                        <View style={{ marginTop: 7, flex: 1, alignItems: 'center' }}>
                                            <Text style={{ color: '#fff', fontSize: 20 }}>Profile</Text>
                                        </View>
                                        <View style={{ marginTop: 7, flex: 1, alignItems: 'flex-end' }}>
                                            <MaterialIcon name="dots-vertical" size={25} onPress={() => alert('menu')} color='#fff' />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                                        <View style={{ flex: 6, alignItems: 'flex-end' }}>
                                            <Image source={{ uri: 'https://media.npr.org/assets/img/2017/09/14/gettyimages-10141026_slide-67be9fc1bca330b26debade87690b5e84286614d.jpg' }} style={{ height: 80, width: 80, borderRadius: 20 }} />
                                        </View>
                                        <View style={{ flex: 4 }}>
                                            <View style={{ width: 35, borderWidth: 2, borderColor: '#fff', marginLeft: 5, borderRadius: 5 }}>
                                                <Text style={{ fontSize: 11, paddingLeft: 5, color: '#fff' }}>PRO</Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: 3 }}>
                                        <Text style={{ color: '#fff', fontSize: 20 }}>Mr Bunny Licious</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginTop: 2, marginBottom: 50 }}>
                                        <Text style={{ color: '#dedede' }}>Proffesional Cute Animal</Text>
                                    </View>

                                </ImageBackground>
                            </View>
                        )
                    }

                }} />
            </ProfileStack.Navigator>
        </>
    )
}

export default ProfileStackScreen

const ProfileStack = createStackNavigator()
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dedede',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const headerStyle = {
    headerStyle: {
        backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
}