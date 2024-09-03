


import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Letter({userlet}) {
  return (
    <View style={conStyle.sec}>
      <Text style={conStyle.letter}>{userlet} </Text>
    </View>
  );
}



const conStyle = StyleSheet.create({
    sec:
    {
        display: "flex",
        alignItems: "flex-start",
         width:370,
        marginTop:20
    },
    letter:
    {
      padding: 10,
      color: "white",
      backgroundColor: "#2f82d6",
      borderRadius: 30,
    },
    
})



