import { View, Text } from "react-native";
import React from "react";

// newwwwwwwwwwwwwww
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./utilies/routes";
import Home from "./Components/Lab 3/Home";
import FillmDetails from "./Components/Lab 3/FillmDetails";
import Aflamy from "./Components/Lab 3/Aflamy";
import Drawernavigat from "./Components/Lab 3/Drawernavigat";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.Drawernavigat} component={Drawernavigat} options={{header:()=>null}}/>
        <Stack.Screen name={routes.Home} component={Home} options={{header:()=>null}}/>
        <Stack.Screen name={routes.FillmDetails} component={FillmDetails} options={{header:()=>null}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );  
}


