import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export class InfoSec extends Component {
  render() {
    return (
        <View style={infostyles.infoSec}>
        <View style={infostyles.info}>
          <Text style={{ color: "white" }}>Age : </Text>
          <Text style={{ color: "white" }}>26</Text>
        </View>
        <View style={infostyles.info}>
          <Text style={{ color: "white" }}>Adress : </Text>
          <Text style={{ color: "white" }}>Aswan/ Aswan</Text>
        </View>
        <View style={infostyles.info}>
          <Text style={{ color: "white" }}>Phone : </Text>
          <Text style={{ color: "white" }}>01150909991</Text>
        </View>
      </View>
    )
  }
}

export default InfoSec



const infostyles = StyleSheet.create({
    infoSec: 
  {
    width: 270,
    margin: 'auto',
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    padding: 15
  },

  info: 
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8
  },
})
