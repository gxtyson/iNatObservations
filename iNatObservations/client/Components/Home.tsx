import React from 'react';
import { StyleSheet, View,  ScrollView } from 'react-native';

import ObservationHomeCard from './ObservationHomeCard';
import HelperFunc from '../Helpers/api';


const Home = () => {
  const allData = HelperFunc()

  const renderObservationCard = () => {
    return (
      <View>
        {allData.map((singleItem) => (
          <ObservationHomeCard props={singleItem} />
        ))}
      </View>
    )
  }
  // console.log('whats the taxon?', taxon.map((z) => z.iconic_taxon_name))
  // const iconicArray = taxon.map((z) => z.iconic_taxon_name)
  // const noRepeats = [...new Set(iconicArray)]

  // console.log('no repeats', noRepeats)


  // const taxonCategory = () => {
  //   return (
  //     <View>
  //       {noRepeats.map((single) => (
  //         <CategoryFilter props={single} />
  //       ))}
  //     </View>
  //   )
  // }

  return (
    <View>
      <ScrollView>{renderObservationCard()}</ScrollView>
    </View>
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
