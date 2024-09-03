

import { View, Text, StyleSheet } from 'react-native'
import { Button, ProgressBar } from "react-native-paper";

import React from 'react'

export default function ProgSec() {
  return (
    <View style={progressstyles.progress}>

    <Text style={{ color: "white", fontWeight: "bold", fontSize: 16, marginBottom: 10}}>Languages</Text>

    <View style={progressstyles.progressBar}>

    <Text style={{ color: "white" }}>Arabic</Text>
    <Text style={{ color: "white" }}>100%</Text>
    </View>
    <ProgressBar progress={0.9} color='white' style={{width: 250, height: 10,borderRadius:3 , backgroundColor:"#6cb8d3" ,  marginBottom: 15}}/>

    <View style={progressstyles.progressBar}>
    <Text style={{ color: "white" }}>English</Text>
    <Text style={{ color: "white" }}>75%</Text>

    </View>
    <ProgressBar progress={0.7} color='white' style={{width: 250, height: 10,borderRadius:3 , backgroundColor:"#6cb8d3" , marginBottom: 15}}/>
    <View style={progressstyles.progressBar}>
    <Text style={{ color: "white" }}>Deutch</Text>
    <Text style={{ color: "white" }}>50%</Text>

    </View>
    <ProgressBar progress={0.5} color='white' style={{width: 250, height: 10,borderRadius:3 , backgroundColor:"#6cb8d3", marginBottom: 15}}/>


    <View>
        <Button onPress={()=>{alert("اللهم لك الحمد")}} textColor="#6cb8d3" style={progressstyles.download}>Download CV</Button>
      </View>

  </View>
  )
}


const progressstyles = StyleSheet.create({
    viewInfo:
  {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  progress: 
  {
    display: "flex",
    width: 270,
    marginVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    padding: 15
  },

  progressBar: 
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5
  },
  download:
  {
    color: 'white',
    width:150,
    marginLeft:50,
    backgroundColor: 'white', 
    marginBottom: 20
  }
})

