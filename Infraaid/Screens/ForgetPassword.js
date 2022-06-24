import { View, Text, Item, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, StatusBar, Image, Alert, ScrollView, ImageBackground,Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const ForgetPassword = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#121a37" barStyle='light-content' />
            {/* //container start */}
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
                    <Text style={{ fontSize: 30, }}>Forget Password</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder='Your Email'
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                               title="Forget Password"
                               color="#121a37"
                               onPress={() => Alert.alert('Forget Password')}
                            />
                        </View>
                    </View>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default ForgetPassword

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
        borderWidth:1,
        padding:10,
        backgroundColor:'#121a37',
        borderRadius:10,
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
      }
})