import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './Screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './Navigation/DrawerNavigation'
import Stacknav from './Navigation/Stacknav'
import HireeDashboard from './Screens/Hiree/HireeDashboard'
import AddEquipments from './Equipments/AddEquipments'
import Equipment from './Equipments/Equipment'
import Search from './Components/Search'
import Detail from './Equipments/Detail'
import HireeProfile from '././Screens/Hiree/HireeProfile'
import OtpScreen from './Screens/OtpScreen'
import Date from './Components/Date'
import Projects from './Projects/Projects'
import AddProjects from './Projects/AddProjects'

const App = () => {
  return (
    <NavigationContainer>
      <Stacknav/>
    </NavigationContainer>
    // <AddEquipments/>
  //  <Equipment/>
  // <Detail/>
  // <HireeDashboard/>
  // <HireeProfile/>
  // <OtpScreen/>
  // <Date/>
  // <Projects/>
  // <AddProjects/>


  )
}

export default App

const styles = StyleSheet.create({})