import React from 'react';
import { StyleSheet, View,  ScrollView, SafeAreaView, Text } from 'react-native';

import ObservationHomeCard from './ObservationHomeCard';
import HelperFunc from '../../Api/api';


const Home = () => {
  const allData = HelperFunc()

  const renderObservationCard = () => {
    return (
      <View>
        {allData.map((singleItem) => (
          <View key={singleItem.id}>
            <ObservationHomeCard props={singleItem} />
          </View>
        ))}
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.banner}>
        <Text style={styles.appName}>iNaturalist</Text>
      </View>
      <ScrollView>{renderObservationCard()}</ScrollView>
    </SafeAreaView>
  )


}


 export default Home

 const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  appName: {
    color: '#86a831',
    fontSize: 24,
    marginLeft: '3%'
  },
  banner: {
    height: '5%',
    borderBottomColor: 'grey',
    borderBottomWidth: .25,
  }
});

