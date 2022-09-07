import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

const ProfileView = () => {
  return (
    <SafeAreaView>
      <View style={styles.false}>
        <Text>
          <Ionicons name="person-circle" size={88} color="white" />
            No Observations
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
    padding: 15
  },
  main: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
