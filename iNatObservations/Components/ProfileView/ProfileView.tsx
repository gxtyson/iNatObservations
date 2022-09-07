import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const ProfileView = () => {
  return (
    <SafeAreaView>
      <Text style={styles.home}>Home</Text>
    </SafeAreaView>
  )
}

export default ProfileView


const styles = StyleSheet.create({
  home: {
    backgroundColor: 'green'
  }
})
