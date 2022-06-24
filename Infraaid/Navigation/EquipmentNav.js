import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Equipment from '../Equipments/Equipment';
import Detail from '../Equipments/Detail';


const Stack = createNativeStackNavigator (); 
const EquipmentNav = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen name ="Equipment" component={Equipment}/>
     <Stack.Screen name="Detail" component={Detail}/>
     </Stack.Navigator>
  )
}

export default EquipmentNav

const styles = StyleSheet.create({})