import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Card = ({onPress,text}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.Text}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        paddingVertical:5,
        paddingHorizontal:55,
        borderWidth:1,
        margin:10,
        borderColor:'#fff',
        borderRadius:10,
    },
    Text:{
        color:'#fff',
        fontSize:18,
        alignSelf:'center'
    }
})