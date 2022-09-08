import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList} from 'react-native'


export default function ObservationExploreCard({ props }) {


  return (
    <View>
      <TouchableOpacity>
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
