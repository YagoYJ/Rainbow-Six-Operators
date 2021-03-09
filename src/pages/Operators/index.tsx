import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopNavigation from "./components/TopNavigation";
import SelectedOperator from "./SelectedOperator";

export default function OperatorsStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Operators" component={TopNavigation} />
      <Stack.Screen name="SelectedOperator" component={SelectedOperator} />
    </Stack.Navigator>
  );
}
