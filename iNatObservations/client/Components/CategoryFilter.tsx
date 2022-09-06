import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function CategoryFilter({ props }) {
  return (
    <View>
      <TouchableOpacity>
        <Text>{props.iconic_taxon_name}</Text>
      </TouchableOpacity>
    </View>
  )
}
