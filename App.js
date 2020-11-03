import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerActions, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabNavigator from './App/components/BottomTabNavigator'




import Home from './App/screen/Home'
import Profile from './App/screen/Profile'
import News from './App/screen/News'
import DrawerContent from './App/components/DrawerContent'

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <DrawerContent {...props} />}>
        <Drawer.Screen name="bottomNavigator" component={BottomTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});


