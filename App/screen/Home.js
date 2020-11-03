import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function Home({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <Text>Home</Text>
                <Button title="Go to Profile Page" onPress={() => navigation.navigate('Profile')} />
            </View>
        </>
    )
}

function HomeStackScreen({ navigation }) {
    return (
        <>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={Home} options={{
                    headerStyle: {
                        backgroundColor: '#009387',
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => (
                        <Icon.Button name="ios-menu" onPress={() => navigation.openDrawer()} size={25} backgroundColor="#009387" />
                    )

                }} />
            </HomeStack.Navigator>
        </>
    )
}

export default HomeStackScreen

const HomeStack = createStackNavigator()
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dedede',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
