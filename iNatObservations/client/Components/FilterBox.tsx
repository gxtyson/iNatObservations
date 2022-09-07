import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function FilterBox({ props , setFilterName}) {
  // const [filterName, setFilterName] = useState('')
  // console.log('what are these props', props)


  const eventHandler = () => {
    setFilterName(props)
    // console.log('what is this state?', filterName)
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
