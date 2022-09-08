import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList} from 'react-native'

import { Entypo } from '@expo/vector-icons';

const ObservationExploreCard = ({ singleItem }) => {
  return (
    <View style={styles.image}>
      <TouchableOpacity>
        {singleItem.photos.length >= 1 ? <Image style={styles.logo} source={{uri: singleItem.photos[0].url}}/> : <View style={styles.noImage}><Entypo name="image" size={36} color="black" /></View>}
      </TouchableOpacity>
    </View>
  )
}

export default ObservationExploreCard

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 140,
  },
  image: {
    margin: 1
  },
  noImage: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
