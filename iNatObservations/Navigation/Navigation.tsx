import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DummyHome from "../Components/ProfileView/DummyComponent";
import Home from '../Components/HomeView/Home'
import Explore from "../Components/ExplorePageView/Explore";

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
    <Tab.Navigator >

      {/* need to figure out how mant bottom tabs */}
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Explore' component={Explore} />
      {/* <Tab.Screen name='Observe' component={Home} /> */}
      <Tab.Screen name='Profile' component={DummyHome} />
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
