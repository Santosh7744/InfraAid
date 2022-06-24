import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity, Button,Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput/CustomInput'
import Dropdown from '../Components/Dropdown'
import CustomButton from '../Components/CustomButton/CustomButton'

const AddProjects = () => {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#121a37" barStyle='light-content' />
            <View style={styles.equipments}>
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>Projects Information</Text>
            </View>
            <View style={styles.formField}>
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Project Name</Text>
                <CustomInput
                    placeholder="Enter Your Project Name"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Project Date</Text>
                <CustomInput
                    placeholder="Project Date"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Project Location</Text>
                <CustomInput
                    placeholder="Project Location"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Project Duration</Text>
                <CustomInput
                    placeholder="Enter Project Duration"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Project Category</Text>
                <Dropdown
                />
            </View>
            <View style={styles.fixToText}>
                <Button
                    title="Submnit"
                    onPress={() => Alert.alert('Left button pressed')}
                />
                <Button
                    title="Cancel"
                    onPress={() => Alert.alert('Right button pressed')}
                />
            </View>
        </ScrollView>
  )
}

export default AddProjects

const styles = StyleSheet.create({
    equipments: {
        backgroundColor: '#121a37',
        padding: 15,
    },
    formField: {
        padding: 10,
        marginTop: 5,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin:15
      },
})