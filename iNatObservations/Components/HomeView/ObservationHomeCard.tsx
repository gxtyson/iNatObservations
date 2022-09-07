import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

export default function ObservationHomeCard({ props }) {
  console.log('props', props)
  console.log('photos', props.photos)




  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <View>
          <Text style={styles.username}>
            <Ionicons name="person-circle-sharp" size={30} color="black" />
            {props.user.login}
          </Text>
        </View>

        {props.photos.length >= 1 ? <Image style={styles.image} source={{uri: props.photos[0].url}}/> : <Text>no Image</Text>}

        <Text style={styles.commonName}>
          {props.taxon.preferred_common_name}
        </Text>

        <Text style={styles.taxonName}>
          {`(${props.taxon.name})`}
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 420,
  },
  username: {
    padding: 5,
    fontSize: 18,
  },
  commonName: {
    fontSize: 24,
    padding: 2,
  },
  taxonName: {
    fontSize: 18,
    color: 'gray',
    padding: 2,
    fontStyle: 'italic'
  },
  card: {
    marginHorizontal: 2,
    paddingBottom: 6,
  },




});
