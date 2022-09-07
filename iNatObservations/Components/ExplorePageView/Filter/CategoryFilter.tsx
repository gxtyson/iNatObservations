import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function CategoryFilter({ props }) {

  // console.log('iconic props', props)

  // const noRepeats = [...new Set(props)]

  return (
    <View>
      <TouchableOpacity>
        <Text>{props}</Text>
      </TouchableOpacity>
    </View>
  )
}
