import React from 'react';
import { View, Text, TouchableOpacity, Button, Dimensions, TextInput, Platform, StyleSheet, StatusBar, Image, Alert, ScrollView, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../Components/CustomInput/CustomInput';

const HireeProfile = ({navigation}) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#121a37" barStyle='light-content' />
            <View style={styles.profileSetting}>
                <View>
                    <Text>Super Admin</Text>
                </View>
                <View style={styles.headerBar}>
                    <FontAwesome
                        name='envelope'
                        size={15}
                        color='#ff7607'
                        style={{ paddingLeft: 18 }}
                    />
                    <FontAwesome
                        name='bell'
                        size={15}
                        color='#ff7607'
                        style={{ paddingLeft: 18 }}
                    />
                </View>
            </View>
            <View style={styles.brandview}>
                <ImageBackground
                    source={require('../../assets/images/Loginbg.jpg')}
                    style={{ height: Dimensions.get('screen').height / 4.5, }}
                    resizeMode="cover">
                </ImageBackground>
            </View>
            <View style={styles.profileImage}>
                <Image style={styles.profilePic}
                    source={require('../../assets/images/profile.png')}
                />
                <Text style={{ fontSize: 25, color: 'blue', margin: 10 }}>User Name</Text>
                <View style={styles.userView}>
                    <TouchableOpacity>
                        <Text style={{ color: '#ff5e15', fontSize: 12, padding: 10 }}onPress={()=>navigation.navigate('HireeDashboard')}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.info}>
                    <Text>Basic Information</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Full Name</Text>
                    <Text style={{color:'#000'}}>Manas Biswal</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Mobile</Text>
                    <Text style={{color:'#000'}}>9853053025</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Email</Text>
                    <Text style={{color:'#000'}}>pabi.gochhi@gmail.com</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Aadhar</Text>
                    <Text style={{color:'#000'}}>432156785643</Text>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.info}>
                    <Text>Company Information</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Company Name</Text>
                    <Text style={{color:'#000'}}>Abc Construction</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>GST</Text>
                    <Text style={{color:'#000'}}>21AABCU9603R1Z1</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>CIN No</Text>
                    <Text style={{color:'#000'}}>L21091KA2019OPC141331</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Licence No</Text>
                    <Text style={{color:'#000'}}>awbpg5690</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Address</Text>
                    <Text style={{color:'#000'}}>India Odisha Khordha Asd 751001</Text>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.info}>
                    <Text>Bank Information</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Bank Name</Text>
                    <Text style={{color:'#000'}}>SBI</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Account No</Text>
                    <Text style={{color:'#000'}}>123456784543</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>Account Name</Text>
                    <Text style={{color:'#000'}}>Abc Construction</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{color:'#000'}}>IFSC Code</Text>
                    <Text style={{color:'#000'}}>SBIN009</Text>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.info}>
                    <Text>Documents</Text>
                </View>
                <View style={styles.setting}>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default HireeProfile

const styles = StyleSheet.create({
    profileSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: '#edf1f5',
        borderBottomWidth: 1,
    },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    brandview: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#5e17eb',

    },
    profileImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: -75,
    },
    profilePic: {
        borderRadius: 10,
        width: 150,
        height: 150
    },
    info:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#f7f7f7',
        backgroundColor:'#f7f7f7',
        alignItems:'center',
        borderRadius:5,
    },
    setting:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#f7f7f7'

    }

})