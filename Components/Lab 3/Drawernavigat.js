import { createDrawerNavigator } from "@react-navigation/drawer";
import Aflamy from "./Aflamy";

import { View, Text } from "react-native";
import React from "react";
import routes from "../../utilies/routes";
import Todo from "../Lab 2/task-2/Todo";
import Cv from "../Lab 1/Cv";
import Phonecontact from "../Lab 2/task-1/Phonecontact";

const Drawer = createDrawerNavigator();

export default function Drawernavigat() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.Aflamy} component={Aflamy} />
      <Drawer.Screen name={routes.Todo} component={Todo} />
      <Drawer.Screen name={routes.Cv} component={Cv} />
      <Drawer.Screen name={routes.Phonecontact} component={Phonecontact} />
    </Drawer.Navigator>
  );
}
