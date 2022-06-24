import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, Dimensions, TextInput,SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '../Components/CustomInput/CustomInput'
import CustomButton from '../Components/CustomButton/CustomButton'

const OtpScreen = () => {
    return (
        <SafeAreaView  style={{ flex: 1, backgroundColor: '#f67d22' }}>
            
            {/* //container start */}
            <View
                style={{ height: Dimensions.get('screen').height /3, backgroundColor: '#f67d22' }}>
                <View style={styles.brandview}>
                    <Image
                        source={require('../assets/images/logo6.png')}
                    />
                </View>
            </View>
            {/* footer view */}
            <View style={styles.footerview}>
                <View style={{ padding: 40 }}>
                    <Text style={{ fontSize: 25,alignSelf:'center' }}>OTP</Text>
                    <Text style={{ fontSize: 15,alignSelf:'center' }}>Please enter the OTP sent to your mobile number</Text>
                    <View style={{ marginTop: 20 }}>
                        <View style={styles.action}>
                            <View style={styles.otpBox}>
                            <TextInput
                                maxLength={1}
                                style={styles.input}
                              />
                            </View>
                            <View style={styles.otpBox}>
                            <TextInput
                                maxLength={1}
                                style={styles.input}
                              />
                            </View>
                            <View style={styles.otpBox}>
                            <TextInput
                                maxLength={1}
                                style={styles.input}
                              />
                            </View>
                            <View style={styles.otpBox}>
                              <TextInput
                                maxLength={1}
                                style={styles.input}
                              />
                            </View>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <CustomButton 
                                  text="submit"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
       
    )
}

export default OtpScreen
const styles = StyleSheet.create({
    brandview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerview: {
        flex: 1,
        paddingTop:20,
        backgroundColor: '#fff',
        borderTopStartRadius: 75,
        borderTopEndRadius: 10,
        height:Dimensions.get('screen').height /1,
    },
    action: {
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    input:{
        backgroundColor:"#f5f4f2", 
        fontWeight:"600",
        fontSize:20,
        height:45,
        alignSelf:'center',
        width:40,
        paddingLeft:10,
    },
    otpBox:{
        marginTop:20,
    },
    button:{
        marginTop:50
    },
})