import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native'
import React from 'react'

const Statusbar = () => {
  return (
    <ScrollView>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#121a37" translucent = {true}/>
    </ScrollView>
  )
}
export default Statusbar

const styles = StyleSheet.create({})