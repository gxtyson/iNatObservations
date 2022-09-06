import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'


export default function ResultComponent({ props }) {

console.log('what are props here', props)

  return (
    <View>
    <TouchableOpacity>
      <Text>{props.name}</Text>
      <Image style={styles.logo} source={{uri: props.default_photo.medium_url}} />
    </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 450,
  },
});
