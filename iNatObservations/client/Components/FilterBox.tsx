import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function FilterBox({ props , setFilterName}) {

  const eventHandler = () => {
    setFilterName(props)
  }



  return (
    <View>
      <TouchableOpacity onPress={eventHandler}>
        <Text>
        {props}
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

})
