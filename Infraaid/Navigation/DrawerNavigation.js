import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={LoginScreen} />
            <Drawer.Screen name="Profile" component={RegisterScreen} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigation

const styles = StyleSheet.create({})