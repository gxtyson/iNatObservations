import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'


export default function ResultComponent({ props }) {

console.log('what are props here', props)

  return (
    <View>
    <TouchableOpacity>
      {props.taxon !== null ? <Text>{props.taxon.name}</Text> : <Text>Name not found</Text>}

      {props.taxon !== null ? <Text>{props.taxon.preferred_common_name}</Text> : <Text>Name not found</Text>}

      {props.photos.length >= 1 ? <Image style={styles.logo} source={{uri: props.photos[0].url}}/> : <Text>no Image</Text>}
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
