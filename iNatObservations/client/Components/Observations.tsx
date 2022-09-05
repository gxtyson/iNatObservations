import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {StyleSheet, TouchableOpacity, View, Text } from 'react-native';


// import { fetchObservationTaxonName } from '../Helpers/api';


function Observation() {
  const [taxonName, setTaxonName] = useState(null)

  const fetchObservationTaxonName = async () => {
    try {
      const { data } = await axios.get(
        "https://api.inaturalist.org/v1/observations"
      );
      const resultArray = data.results;
      const taxon = resultArray.map((x) => x.taxon).filter(Boolean);
      const taxonName = taxon.map((y) => y.name).filter(Boolean);

      setTaxonName(taxonName);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchObservationTaxonName()
  }, [])

  console.log('fetched', taxonName)


  return (
    <View>
      <TouchableOpacity
      style={styles.buttonStyle}
      >
        <Text>{taxonName}</Text>
      </TouchableOpacity>
    </View>
  )
}


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
