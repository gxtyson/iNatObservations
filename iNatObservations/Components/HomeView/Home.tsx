import React from 'react';
import { StyleSheet, View,  ScrollView, SafeAreaView, Text } from 'react-native';

import ObservationHomeCard from './ObservationHomeCard';
import HelperFunc from '../../Api/api';

import { ISingleResults } from '../../Interfaces/singleResult';

const Home = () => {
  const allData = HelperFunc()
  console.log('what is this data?', allData)

  const filterNullTaxonValues = allData.filter(function(taxon) {
    return taxon.taxon !== null
  })

  const renderObservationCard = () => {
    return (
      <View>
        {filterNullTaxonValues.map((singleItem) => (
          <View key={singleItem.id}>
            <ObservationHomeCard singleItem={singleItem} />
          </View>
        ))}
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.banner}>
        <Text style={styles.appName}>
          <Text style={styles.i}>í</Text>
          Naturalist
        </Text>
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
    color: 'black',
    fontSize: 24,
    marginLeft: '3%',
    fontWeight: 'bold'
  },
  banner: {
    height: '5%',
    borderBottomColor: 'grey',
    borderBottomWidth: .25,
  },
  i: {
    color: '#86a831',
  }

});

