

import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


export default function Contacts({conName}) {
  return (
    <View style={{padding:15,}}>
    <View style={conStyle.sec}>
      <Image style={conStyle.img} source={require("../../../assets/pic2.png")}/>
      <Text style={conStyle.userCon} >{conName} </Text>
    </View>
    </View>
  )
}


const conStyle = StyleSheet.create({
  sec:
    {
        display: "flex",
        flexDirection:'row',
        alignItems: "flex-start",
         width: 300,
    },
  img:
    {
      width:40,
      height:40,
      borderRadius:50,
    } ,
    userCon: 
    {
      fontSize:18,
      marginLeft:10,
      color: "white"
    }
})
