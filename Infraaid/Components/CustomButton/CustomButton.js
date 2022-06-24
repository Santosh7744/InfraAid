import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        width:'100%',
        padding:10,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    text:{
        color:'#fff',
        fontSize:18,
    }
})  