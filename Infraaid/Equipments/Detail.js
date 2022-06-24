import { StyleSheet, Text, View, ScrollView, StatusBar, Image, Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get("window");
const height = width * 80 / 100;
const images = [
    'https://img.freepik.com/free-vector/bulldozer_1308-39611.jpg?t=st=1655890922~exp=1655891522~hmac=10f0c6c830b82ddff57b7c0a96f52a081a87f499ca66959f5480e6799030535b&w=996',
    'https://img.freepik.com/free-vector/excavator-vehicle-working_1308-41657.jpg?t=st=1655890922~exp=1655891522~hmac=b25a6798cf2207e06896ca01657b92338de1820013e465292972765ddf7f62b9&w=1060',
    'https://img.freepik.com/free-vector/tractor-vehicle-cartoon-building-transportation-isolated_138676-2468.jpg?t=st=1655890922~exp=1655891522~hmac=6a08384f6b36561cb86e51abcb96ac127c06c6a0b0dbdf439a0086407566972a&w=826'
]

export default class Details extends React.Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor="#121a37" barStyle='light-content' />
                <View style={styles.equipments}>
                    <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>JCB</Text>
                </View>
                <View style={styles.equipmentImage}>
                    <ScrollView pagingEnabled horizontal style={{width, height}}>
                        {
                            images.map((image, index) => (
                                <Image
                                    key={index}
                                    source={{ uri: image }}
                                    style={{ width, height, resizeMode:'contain' }}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Equipment Name</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>JCB</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Category</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>JCB</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Model No</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>123</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Color</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Black</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Capacity</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>120</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Manufacturer</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Gupta Construction</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Operations Hours</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>12hr</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Chasing No</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1234</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Enginee No</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1234</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Registration No</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1234</Text>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    equipments: {
        backgroundColor: '#121a37',
        padding: 15,
    },
    equipmentImage: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
        margin: 10,
        borderColor: '#edf1f5'
    }
})