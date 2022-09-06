import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

import ResultComponent from './ResultComponent';

const Feed: React.FC = () => {
  const [taxon, setTaxon] = useState([])


  const fetchObservationResults = async() => {
    const { data } = await axios.get("https://api.inaturalist.org/v1/observations")
    setTaxon(data.results.map((x) => x.taxon).filter(Boolean))
  }
  useEffect(() => {
    fetchObservationResults()
  }, [])
  const observationCard = () => {
    return (
      <View>
        {taxon.map((singleItem) => (
          <ResultComponent props={singleItem} />
        ))}
      </View>
    )
  }

  return (
    <View>{observationCard()}</View>
  )


}


 export default Feed

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
