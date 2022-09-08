import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import { useState } from 'react'

import ObservationExploreCard from "./ObservationExploreCard";
import FilterBox from "./Filter/FilterBox";
import HelperFunc from "../../Api/api";

const Explore = () => {
  const allData = HelperFunc()
  const [filterName, setFilterName] = useState('')

  const filterNullTaxonValues = allData.filter(function(taxon) {
    return taxon.taxon !== null
  })
  const iconicArray = filterNullTaxonValues.map((y) => y.taxon.iconic_taxon_name)
  const iconicFilteredArray = [... new Set(iconicArray)]

  const filterFunc = filterNullTaxonValues.filter(function(icon) {
    if (filterName === '') {
      return filterNullTaxonValues
    } else {
      return icon.taxon.iconic_taxon_name === filterName
    }
  })

  console.log('iconicFiltered', iconicFilteredArray)


  const renderObservationExploreGrid = () => {
    return (
      <View>
        {filterFunc.map((singleItem) => (
          <View key={singleItem.id}>
            <ObservationExploreCard singleItem={singleItem} />
          </View>
        ))}
      </View>
    )
  }




  const renderFilterBox = () => {
    const reset = () => {
      setFilterName('')
    }
    const fixedAnimalArray = ['Fungi', 'Plantae', 'Aves', 'Insecta', 'Mollusca', 'Arachnida', 'Animalia', 'Reptilia', 'Amphibia', 'Mammalia']

    return (
      <View>
        <TouchableOpacity>
          {fixedAnimalArray.map((iconicName) => (
            <FilterBox props={iconicName} setFilterName={setFilterName}/>
          ))}
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text>Clear Filters</Text>
        </TouchableOpacity>
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
      <View>
        {renderFilterBox()}
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {renderObservationExploreGrid()}
      </ScrollView>
    </SafeAreaView>
  )

}

export default Explore

const styles = StyleSheet.create({
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
  },
  grid: {
    backgroundColor: 'pink',
    display: 'flex',

  }
})
