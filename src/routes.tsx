import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopNavigation from "./pages/Operators/components/TopNavigation";
import SelectedOperator from "./pages/Operators/SelectedOperator";
import { NavigationContainer } from "@react-navigation/native";

export default function OperatorsStack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Operators" component={TopNavigation} />
        <Stack.Screen name="SelectedOperator" component={SelectedOperator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
