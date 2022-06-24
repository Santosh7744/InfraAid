import React, { useEffect, useState } from 'react'
import { View, Text, Item, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, StatusBar, Image, Alert, ScrollView, ImageBackground } from 'react-native';
import CustomInput from '../Components/CustomInput/CustomInput';
import CustomButton from '../Components/CustomButton/CustomButton';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign In');
  }
  return (
    //container start
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} 
    showsVerticalScrollIndicator={false}
    >
      <StatusBar backgroundColor="#121a37" barStyle='light-content' />
      <ImageBackground
        source={require('../assets/images/Loginbg.jpg')}
        style={{ height: Dimensions.get('screen').height / 2.5, }}
        resizeMode="cover">
        <View style={styles.brandview}>
          <Image
            source={require('../assets/images/logo6.png')}
          />
        </View>
      </ImageBackground>
      {/* footer view */}
      <View style={styles.footerview}>
        <View style={{ padding: 40 }}>
          <Text style={{ fontSize: 30, }}>Welcome To InfraAid</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <TextInput
                placeholder='Your Email'
                style={styles.textInput}
                autoCapitalize='none'
              />
            </View>
            <Text style={[styles.text_footer, { marginTop: 15, color: '#121a37' }]}>Password</Text>
            <View style={styles.action}>
              <TextInput
                placeholder='Your Password'
                style={styles.textInput}
                autoCapitalize='none'
              />
            </View>
            <View style={{ flex: 1, marginRight: 2, marginTop: 25, }}>
              <Text style={{ color: '#5e17eb', fontStyle: 'italic' }} onPress={() => navigation.navigate("RegisterScreen")}>Register Now..</Text>
              <Text style={{ color: '#000', alignSelf: 'flex-end', }} onPress={() => navigation.navigate("ForgetPassword")}>Forget Password</Text>
            </View>
            <View style={{ padding: 15 }}>
              <CustomButton
                text="SignIn"
                onPress={onSignInPressed}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    // container end
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  brandview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerview: {
    flex: 1.5,
    backgroundColor: '#fff',
    bottom: 8,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  text_footer: {
    color: '#121a37'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#121a37',
    paddingBottom: 5
  },
  textInput: {
    flex: 0.5,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#121a37',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#121a37'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})