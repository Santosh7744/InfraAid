import React from 'react'
import { StyleSheet, Text, View, ScrollView, StatusBar,TouchableOpacity } from 'react-native'
import Search from '../Components/Search'
const Equipment = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#121a37" barStyle='light-content' />
      <View style={styles.equipments}>
        <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Equipments</Text>
      </View>
      <Search />
      <View style={styles.equipmentsList}>
          <View>
            <Text style={{fontSize:17,fontWeight:'bold'}}>JCB</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#ff5e15'}}>Gupta Construction</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#fff'}}>Details</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.equipmentsList}>
          <View>
            <Text style={{fontSize:17,fontWeight:'bold'}}>JCB</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#ff5e15'}}>LT Construction</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#fff'}}>Details</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.equipmentsList}>
          <View>
            <Text style={{fontSize:17,fontWeight:'bold'}}>JCB</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#ff5e15'}}>AB Construction</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#fff'}}>Details</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.equipmentsList}>
          <View>
            <Text style={{fontSize:17,fontWeight:'bold'}}>JCB</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#ff5e15'}}>JD Construction</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#fff'}}>Details</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.equipmentsList}>
          <View>
            <Text style={{fontSize:17,fontWeight:'bold'}}>JCB</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#ff5e15'}}>ABC Construction</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#fff'}}>Details</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.equipmentsList}>
          <View>
            <Text style={{fontSize:17,fontWeight:'bold'}}>JCB</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#ff5e15'}}>ECE Construction</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#fff'}}>Details</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.equipmentsList}>
          <View>
            <Text style={{fontSize:17,fontWeight:'bold'}}>JCB</Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#ff5e15'}}>Pradhan Construction</Text>
          </View>
          <View >
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#fff'}}>Details</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
}

export default Equipment

const styles = StyleSheet.create({
  equipments: {
    backgroundColor: '#121a37',
    padding: 15,
  },
  equipmentsList:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10,
    borderWidth:1,
    padding:15,
    borderColor:'#edf1f5',
  
  },
  button:{
    padding:10,
    backgroundColor:'#ff5e15',
    borderRadius:5,
  }
})