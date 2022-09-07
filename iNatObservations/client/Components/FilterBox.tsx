import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function FilterBox({ props }) {
  console.log('what are these props', props)



  return (
    <View>
      <TouchableOpacity>
        <Text>
        {props}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

})
