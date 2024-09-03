

import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React from 'react'

import Contacts from './Contacts'
import Letter from './Letter'




const users = [
    "Ahmed",
    "Ayman",
    "Adham",
    "QEDAiiiS",
    "Qasem",
    "Qadry",
    "Salim",
    "Sayed",
    "Soror",
  ];
  const userLetter = ["A", "Q", "S"];


export default function Phonecontact() {
  return (
    <FlatList
    style={styles.body}
    keyExtractor={(item) => item}
    data={userLetter}
    renderItem={({ item }) => (
      <View key={item}>
        <Letter userlet={item} />

        {users
          .filter((user) => user.startsWith(item))
          .map((filteredUser) => (
            <Contacts key={filteredUser} conName={filteredUser} />
          ))}
      </View>
    )}
  >


     
{/*  anther answer
  <View w style={styles.container}>

          {userLetter.map((letter) => (
            <View key={letter}>
              <Letter userlet={letter} />

              {users.filter((user) => user.startsWith(letter))
                .map((filteredUser) => (
                  <Contacts key={filteredUser} conName={filteredUser} />
                ))}
            </View>
          ))}
      </View>
 */}


      </FlatList>  
  )
}



const styles = StyleSheet.create({
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
  



