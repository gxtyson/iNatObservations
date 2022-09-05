import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

function BottomTabNav() {
  return (
    <Tab.Navigator>

      {/* need to figure out how mant bottom tabs */}
      {/* <Tab.Screen name='' component={} />
      <Tab.Screen name='' component={} /> */}
    </Tab.Navigator>
  )
}

export default function NavigationCon() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  )
}
