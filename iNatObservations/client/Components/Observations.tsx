import React from 'react';
import axios from 'axios';
import {StyleSheet, TouchableOpacity, View, Text } from 'react-native';


function Observation() {
  return (
    <View>
      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={GetData}
      >
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>
    </View>
  )
}

const GetData = () => {
  axios
    .get('https://api.inaturalist.org/v1/observations')
    .then(function (response) {
      // handle success
      // alert(JSON.stringify(response.data));

      const resultArray = response.data.results
      const taxon = resultArray.map((x) => x.taxon)
      const filteredTaxon = taxon.filter(Boolean)
      const taxonName = filteredTaxon.map((y) => y.name)
      const filteredTaxonName = taxonName.filter(Boolean)
      console.log('taxon here', filteredTaxonName)

      // console.log('taxon here', taxon.map((y) => y.name ))
    })
    // .catch(function (error) {
    //   // handle error
    //   alert(error.message);
    // })
    // .finally(function () {
    //   // always executed
    //   alert('Finally called');
    // });
};
 export default Observation

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
});
