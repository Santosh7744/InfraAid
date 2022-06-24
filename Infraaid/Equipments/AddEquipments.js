import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity, Button,Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput/CustomInput'
import Dropdown from '../Components/Dropdown'
import CustomButton from '../Components/CustomButton/CustomButton'
const AddEquipments = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor="#121a37" barStyle='light-content' />
            <View style={styles.equipments}>
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>Equipment Information</Text>
            </View>
            <View style={styles.formField}>
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Equipment Name</Text>
                <CustomInput
                    placeholder="Enter Your Equipment Name"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Equipment Type</Text>
                <Dropdown
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Select Category</Text>
                <Dropdown
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Sub-category</Text>
                <Dropdown
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Engine No</Text>
                <CustomInput
                    placeholder="Enter Engine No"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Chassis No</Text>
                <CustomInput
                    placeholder="Chassis No"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Load Capacity</Text>
                <CustomInput
                    placeholder="Enter Load Capacity"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Maximum Operation Hour Per Day</Text>
                <CustomInput
                    placeholder="Enter Maximum Operation Hour Per Day"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Fuel Type</Text>
                <Dropdown
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Fuel Consumption</Text>
                <CustomInput
                    placeholder="Lt/Hr"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Price Per Hour</Text>
                <CustomInput
                    placeholder="Price Per Hour"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Price Per Day</Text>
                <CustomInput
                    placeholder="Price Per Day"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Price Per Month</Text>
                <CustomInput
                    placeholder="Price Per Month"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Halting Cost</Text>
                <CustomInput
                    placeholder="Enter Halting Cost"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Any Benefits</Text>
                <CustomInput
                    placeholder="Enter Benefits"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Maintenance</Text>
                <Dropdown />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Maintenance Note</Text>
                <CustomInput
                    placeholder="Enter Your Maintenance Note"
                />
            </View>
            <View style={styles.equipments}>
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>Manufacturing Information</Text>
            </View>
            <View style={styles.formField}>
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Model</Text>
                <CustomInput
                    placeholder="Enter Your Model"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Color</Text>
                <CustomInput
                    placeholder="Enter Your Color"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Manufacturer</Text>
                <CustomInput
                    placeholder="Enter Equipment Manufacturer"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Registration No</Text>
                <CustomInput
                    placeholder="Enter Equipment Registration No"
                />
                <Text style={{ color: '#000', margin: 5, fontWeight: 'bold' }}>Last Service Hour Or KM</Text>
                <CustomInput
                    placeholder="Enter Last Service Hour Or KM"
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

export default AddEquipments

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