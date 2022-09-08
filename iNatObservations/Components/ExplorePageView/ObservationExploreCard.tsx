import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList} from 'react-native'


const ObservationExploreCard = ({ singleItem }) => {
  return (
    <View>
      <TouchableOpacity>
        {singleItem.photos.length >= 1 ? <Image style={styles.logo} source={{uri: singleItem.photos[0].url}}/> : <Text>no Image</Text>}
      </TouchableOpacity>
    </View>

  )
}

export default ObservationExploreCard

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 450,
  },
});
