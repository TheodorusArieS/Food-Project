import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function News({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

function NewsStackScreen({ navigation }) {
    return (
        <>
            <NewsStack.Navigator>
                <NewsStack.Screen name="News" component={News} options={{
                  
                  headerStyle: {
                        backgroundColor: 'orange'
                    },
                    headerTintColor: '#fff',
                    headerLeft:()=>(
                        <Icon.Button name="ios-menu" size={25} onPress={()=>navigation.openDrawer()} backgroundColor="orange"  />
                    )
                }} />
            </NewsStack.Navigator>
        </>
    )
}

export default NewsStackScreen

const NewsStack = createStackNavigator()
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