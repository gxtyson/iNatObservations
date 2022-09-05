import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

import ResultComponent from './ResultComponent';
// import { fetchObservationTaxonName } from '../Helpers/api';


function Observation() {
  const [taxonName, setTaxonName] = useState(null)
  // const [iconicTaxonName, setIconicTaxonName] = useState(null)
  const [defaultPhoto, setDefaultPhoto] = useState([])

  const [results, setResults] = useState([])

  const fetchObservationResults = async() => {
    const { data } = await axios.get("https://api.inaturalist.org/v1/observations")
    setResults(data.results.map((x) => x.taxon).filter(Boolean))
  }

  // console.log('here are the results', results)

  // const fetchObservationTaxonName = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://api.inaturalist.org/v1/observations"
  //     );
  //     const resultArray = data.results;
  //     const taxon = resultArray.map((x) => x.taxon).filter(Boolean);
  //     const taxonName = taxon.map((y) => y.name).filter(Boolean);

  //     const defaultPhotos = taxon.map((p) => p.default_photo).filter(Boolean);
  //     const squareUrl = defaultPhotos.map((s) => s.square_url).filter(Boolean)
  //     console.log('photos', defaultPhotos)
  //     console.log('photo url', squareUrl)
  //     setDefaultPhoto(squareUrl)

  //     console.log('photurl', defaultPhoto)


  //     // should add a filter method for the iconicTaxonName
  //     // const iconicTaxonName = taxon.map((z) => z.iconic_taxon_name)


  //     setTaxonName(taxonName);

  //     // setIconicTaxonName(iconicTaxonName)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  useEffect(() => {
    fetchObservationResults()
  }, [])

  console.log('here are the results', results)

  function observationCard() {
    return (
      <View>
        {results.map((singleItem) => (
          <View>
            <ResultComponent props={singleItem} />
          </View>
        ))}
      </View>
    )
  }





  return (

    <View>
      <TouchableOpacity
      style={styles.buttonStyle}
      >
        <View>{observationCard()}</View>
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
