


import routes from "../../utilies/routes";
import 'react-native-gesture-handler';
import Popular from "./Popular";
import Home from "./Home";
import React from 'react'
import Toprated from "./Toprated";
import Upcoming from "./Upcoming";

const Tab = createBottomTabNavigator();
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function Aflamy() {
  return (
   <>
   <Tab.Navigator screenOptions={{tabBarStyle:{backgroundColor:'#214b38', height:45}}}>
        <Tab.Screen name={routes.Home} component={Home}
         options=
         {{
          tabBarLabelStyle:{fontSize:16, fontWeight: '500', marginBottom:14},
          tabBarActiveTintColor:'white',
          tabBarLabel: 'Home',
          tabBarIcon: () => null,
          header: () => null
        }} />
        <Tab.Screen name={routes.Toprated} component={Toprated}
         options=
         {{
          tabBarLabelStyle:{fontSize:16, fontWeight: '500', marginBottom:14},
          tabBarActiveTintColor:'white',
          tabBarLabel: 'Toprated',
          tabBarIcon: () => null,
          header: () => null
          }} />
        <Tab.Screen name={routes.Popular} component={Popular} 
         options=
         {{
          tabBarLabelStyle:{fontSize:16, fontWeight: '500', marginBottom:14},
          tabBarActiveTintColor:'white',
          tabBarLabel: 'Popular',
          tabBarIcon: () => null,
          header: () => null
        }} />
        <Tab.Screen name={routes.Upcoming} component={Upcoming} 
         options=
         {{
          tabBarLabelStyle:{fontSize:16, fontWeight: '500', marginBottom:14},
          tabBarActiveTintColor:'white',
          tabBarLabel: 'Upcoming',
          tabBarIcon: () => null,
          header: () => null
        }} />
   </Tab.Navigator>  
   </>
  )
}




