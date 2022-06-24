import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, ImageBackground, Dimensions, SafeAreaView } from 'react-native'
import React,{ useEffect, useState } from 'react'
import Card from '../Components/Card'
import CustomButton from '../Components/CustomButton/CustomButton'

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, }}>
      <StatusBar backgroundColor="#121a37" barStyle='light-content' />
      <ImageBackground
        style={{ flex: 1}}
        resizeMode='cover'
        source={require('../assets/images/bg.jpg')}>
        <View style={styles.register}>
          <Text style={[styles.accTitle, { alignSelf: 'center' }]}>Create Your Account</Text>
          <Text style={[styles.Title, { alignSelf: 'center' }]}>Who is going to use the account</Text>
          <View style={styles.button}>
            <Card
              text="Hiree"
            />
            <Card
              text="Hirer"
            />
          </View>
          <View style={styles.button}>
            <Card
              text="Operator"
            />
            <Card
              text="Vendor"
            />
          </View>
          <View style={styles.button}>
            <Card
              text="Transporter"
            />
            <Card
              text="Government"
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity>
              <CustomButton
               text="Next"
               onPress={()=>navigation.navigate('RegistrationForm')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground >
    </View >
  )
}
export default RegisterScreen
const styles = StyleSheet.create({
  register: {
    height: '60%',
    bottom: 0,

  },
  accTitle: {
    color: '#fff',
    paddingTop: 180,
    fontSize: 18,
  },
  Title:{
    color:'#fff',
    fontSize:14,
  },
  buttonGroup:{
    padding:10,
    margin:10,
    borderRadius:5,
  }
  
})