


import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import ImgSec from './ImgSec'
import InfoSec from './InfoSec'
import ProgSec from './progress'



import React from 'react'

export default function Cv() {
  return (
    <ScrollView style={cvstyles.body}>
        <View style={cvstyles.container}>
          <ImgSec />
          <InfoSec />
          <ProgSec />
        </View>
      </ScrollView> 
  )
}


const cvstyles = StyleSheet.create({
    body: {
      backgroundColor: "#2c3c44",
      color: "white",
    },
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: 23,
      width: 300,
      margin: "auto",
    },
  });
  


