import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

const ProfileView = () => {
  return (
    <SafeAreaView>
      <View style={styles.banner}>
        <Text style={styles.appName}>
          <Text style={styles.i}>í</Text>
            Naturalist
        </Text>
      </View>

      <View style={styles.main}>
        <Ionicons name="person-circle" size={200} color="gray" />
        <Text>
          Looks like you have no observations.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileView


const styles = StyleSheet.create({
  false: {
    backgroundColor: 'gray',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: 'black',
    fontSize: 26,
    marginLeft: '3%',
    fontWeight: 'bold'
  },
  banner: {
    height: '15%',
    borderBottomColor: 'grey',
    borderBottomWidth: .25,
  },
  i: {
    color: '#86a831',
  }
})
