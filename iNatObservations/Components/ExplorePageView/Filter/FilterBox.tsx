import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function FilterBox({ props , setFilterName}) {


  const eventHandler = () => {
    setFilterName(props)
  }
  const itemSwitch = (props) => {
    switch (props) {
      case 'Fungi':
        return <MaterialCommunityIcons name="mushroom" size={24} color="black" />
      case 'Plantae':
        return <FontAwesome5 name="seedling" size={24} color="black" />
      case 'Aves':
        return <MaterialCommunityIcons name="bird" size={24} color="black" />
      case 'Insecta':
        return <FontAwesome name="bug" size={24} color="black" />
      case 'Mollusca':
        return <MaterialCommunityIcons name="snail" size={24} color="black" />
      case 'Arachnida':
        return <MaterialCommunityIcons name="spider" size={24} color="black" />
      case 'Amphibia':
        return <FontAwesome5 name="frog" size={24} color="black" />
      case 'Reptilia':
        return <MaterialCommunityIcons name="snake" size={24} color="black" />
      case 'Mammalia':
        return <FontAwesome5 name="evernote" size={24} color="black" />

    }
  }



  return (
    <View>
      <TouchableOpacity onPress={eventHandler}>
        <Text style={styles.icon}>
        {itemSwitch(props)}
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    margin: 3,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 5,

  },
})
