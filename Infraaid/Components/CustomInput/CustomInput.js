import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value ={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={{padding: 10}}
        secureTextEntry={secureTextEntry}
        placeholderTextColor='#000'
      />
    </View>
  )
}
export default CustomInput
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F0F5FE',
    width:'100%',
    borderWidth:1,
    borderColor:'#F0F5FE',
    marginTop:5,
    borderRadius:5,
  },
})