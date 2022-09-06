import React from "react";
import {StyleSheet, View, Text, Image} from 'react-native'


export default function ResultComponent({ props }) {

  console.log('here are images', props)


  return (
    <View>
      <Text>{props.name}</Text>
      <Image style={styles.logo} source={{uri: props.default_photo.square_url}} />
    </View>
  )
}


const styles = StyleSheet.create({

  logo: {
    width: 70,
    height: 70,
  },
});
