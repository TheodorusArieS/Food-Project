import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Profile this is how i live now</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

function ProfileStackScreen({ navigation }) {
    return (
        <>
            <ProfileStack.Navigator>
                <ProfileStack.Screen name="Profile" component={Profile} options={{
                  title:'Profile1',
                  headerStyle: {
                        backgroundColor: 'red'
                    },
                    headerTintColor: '#fff',
                    headerLeft:()=>(
                        <Icon.Button name="ios-menu" size={25} onPress={()=>navigation.openDrawer()} backgroundColor="red"  />
                    )
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