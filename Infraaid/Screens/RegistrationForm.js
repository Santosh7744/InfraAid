import { StyleSheet, Text, View,ScrollView,TextInput,ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import CustomInput from '../Components/CustomInput/CustomInput'
import CustomButton from '../Components/CustomButton/CustomButton'

const RegistrationForm = ({navigation}) => {
    return (
        <ScrollView style={{flex:1, backgroundColor:'#fff'}}>
            <ImageBackground
                source={require('../assets/images/Loginbg.jpg')}
                style={{ height: Dimensions.get('screen').height / 2.9, }}
                resizeMode="cover">
                <View style={styles.brandview}>
                    <Image
                        source={require('../assets/images/logo6.png')}
                    />
                </View>
            </ImageBackground>
            <View style={styles.footerview}>
                <View style={{ padding: 35 }}>
                    <Text style={{ fontSize: 20, }}>Account Information</Text>
                    <Text style={{ fontSize: 15, }}>Enter your account details</Text>
                    <View style={{ marginTop: 20 }}>
                        <CustomInput
                          text="Company / First Name"
                          placeholder="Company / First Name"
                        />
                        <CustomInput
                          text="Name"
                          placeholder="Name"
                        />
                        <CustomInput
                          text="Email"
                          placeholder="Email"
                        />
                        <CustomInput
                          text="Mobile Number"
                          placeholder="Mobile No"
                        />
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <CustomButton
                                  text="Previous"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CustomButton
                                  text="Next"
                                  onPress={()=>navigation.navigate('LoginInfo')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        
    )
}

export default RegistrationForm
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
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    button:{
        flexDirection:'row',
         justifyContent:'space-evenly',
         margin:10,
    }
})