import { StyleSheet, Text, View, ScrollView, StatusBar, ImageBackground, Dimensions, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HireeDashboard = ({navigation}) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#121a37" barStyle='light-content' />
            <View style={styles.profileImage}>
                <Image style={styles.profilePic}
                    source={require('../../assets/images/profile.png')}
                />
                <View style={styles.userView}>
                    <TouchableOpacity>
                        <Text style={{ color: '#ff5e15', fontSize: 12, padding: 10 }}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.info}>
                    <Text style={{fontWeight:'bold',}}>Equipments</Text>
                    <TouchableOpacity style={{backgroundColor:'#fb9678', padding:5,borderRadius:5,}}>
                        <Text style={{fontSize:12,color:'#fff'}} onPress={()=>navigation.navigate('Equipment')}>Manage</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dashboard}>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Total</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Booked</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Active</Text>
                </View>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.info}>
                    <Text style={{fontWeight:'bold',}}>Operators</Text>
                    <TouchableOpacity style={{backgroundColor:'#fb9678', padding:5,borderRadius:5,}}>
                        <Text style={{fontSize:12,color:'#fff'}}>Manage</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dashboard}>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Total</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Booked</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Active</Text>
                </View>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.info}>
                    <Text style={{fontWeight:'bold',}}>Projects</Text>
                    <TouchableOpacity style={{backgroundColor:'#fb9678', padding:5,borderRadius:5,}}>
                        <Text style={{fontSize:12,color:'#fff'}} onPress={()=>navigation.navigate('Projects')}>Manage</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.dashboard}>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Total</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Booked</Text>
                </View>
                <View style={styles.setting}>
                    <Text style={{ color: '#fff' }}>0</Text>
                    <Text style={{ color: '#fff' }}>Active</Text>
                </View>
                </View>
                <View>
                    
                </View>
            </View>
        </ScrollView>
    )
}
export default HireeDashboard
const styles = StyleSheet.create({
    profileSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: '#edf1f5',
        borderBottomWidth: 1,
    },
    profileImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 45,
    },
    profilePic: {
        borderRadius: 10,
        width: 150,
        height: 150
    },
    info: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f7f7f7',
        backgroundColor: '#edf1f59c',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    setting:{
        backgroundColor:'#021668',
        borderRadius:10,
        margin:10,
        paddingVertical:15,
        paddingHorizontal:15,
        MarginLeft:45,
        paddingRight:45,
    },
    dashboard:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:5,
    },
    profileInfo:{
        padding:0,
    }
})