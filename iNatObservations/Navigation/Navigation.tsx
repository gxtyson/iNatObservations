import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../Components/ProfileView/ProfileView";
import Home from '../Components/HomeView/Home'
import Explore from "../Components/ExplorePageView/Explore";

import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
// const HomeStack = createNativeStackNavigator()

// const Home = () => {
//   return (
//     <HomeStack.Navigator screenOptions={{headerShown: false}}>
//       <HomeStack.Screen name='DummyHome' component={DummyHome}/>

//     </HomeStack.Navigator>
//   )
// }


export default function BottomTabNav() {

  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
          switch (route.name) {
            case 'Explore':
              return <Entypo name="magnifying-glass" size={24} color="#86a831" />
            case 'Home':
              return <Foundation name="home" size={24} color="#86a831" />
            case "Profile":
              return <Ionicons name="person-circle" size={24} color="#86a831" />
          }
        }
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Explore' component={Explore} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}


// this function will be for authenication if needed for api
// export default function NavigationCon() {
//   return (
//     <NavigationContainer>

//     </NavigationContainer>
//   )
// }
