import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Attackers from "../../Attackers";
import Defenders from "../../Defenders";

const Tab = createMaterialTopTabNavigator();

export default function TopNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Atackers" component={Attackers} />
      <Tab.Screen name="Defenders" component={Defenders} />
    </Tab.Navigator>
  );
}
