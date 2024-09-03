


import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from "react-native-paper";



export class ImgSec extends Component {
  render() {
    return (
        <View style={Imgstyles.imgSec}>
            

        <Image style={Imgstyles.img} source={require("../../assets/pic1.jpg")} />
         
        <Text
          style={{
            color: "white",
            margin: 15,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Mahmoud Qedais
        </Text>
        <Text style={{ color: "white", fontWeight: 300, marginBottom: 14 }}>
          Front End Developer
        </Text>
        <View style={Imgstyles.socialMedia}>
          <Button icon="facebook" textColor="white"></Button>
          <Button icon="twitter" textColor="white"></Button>
          <Button icon="linkedin" textColor="white"></Button>
          <Button icon="instagram" textColor="white"></Button>
        </View>

        </View>
    )
  }
}

export default ImgSec



const Imgstyles = StyleSheet.create({
    imgSec:
  {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },

  img:
  {
    width: 110,
    height:110,
    borderRadius: 80,
    marginTop: 40,
  },


  socialMedia: 
  {
    flex: 1,
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
})