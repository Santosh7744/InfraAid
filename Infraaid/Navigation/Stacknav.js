import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ForgetPassword from '../Screens/ForgetPassword';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import RegistrationForm from '../Screens/RegistrationForm';
import LoginInfo from '../Screens/LoginInfo';
import HireeProfile from '../Screens/Hiree/HireeProfile';
import HireeDashboard from '../Screens/Hiree/HireeDashboard';
import Equipment from '../Equipments/Equipment';
import Details from '../Equipments/Detail';
import AddEquipments from '../Equipments/AddEquipments';
import Projects from '../Projects/Projects';
import AddProjects from '../Projects/AddProjects';

const Stack = createNativeStackNavigator (); 
const Stacknav=()=>{
  return (
     <Stack.Navigator>
     <Stack.Screen name ="LoginScreen" component={LoginScreen}/>
     <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
     <Stack.Screen name ="RegistrationForm" component={RegistrationForm}/>
     <Stack.Screen name ="ForgetPassword" component={ForgetPassword}/>
     <Stack.Screen name="LoginInfo" component={LoginInfo}/>
     <Stack.Screen name="HireeProfile" component={HireeProfile}/>
     <Stack.Screen name="HireeDashboard" component={HireeDashboard}/>
     <Stack.Screen name="Equipment" component={Equipment}/>
     <Stack.Screen name="Detail" component={Details}/>
     <Stack.Screen name="AddEquipments" component={AddEquipments}/>
     <Stack.Screen name="Projects" component={Projects}/>
     <Stack.Screen name="AddProjects" component={AddProjects}/>
     </Stack.Navigator>
     
  )
}

export default Stacknav

const styles = StyleSheet.create({})