import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView } from 'react-native'
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

  const filterFunc = filterNullTaxonValues.filter(function(icon) {
    if (filterName === '') {
      return filterNullTaxonValues
    } else {
      return icon.taxon.iconic_taxon_name === filterName
    }
  })

  const renderFilterBox = () => {
    const reset = () => {
      setFilterName('')
    }
    const fixedAnimalArray = ['Fungi', 'Plantae', 'Aves', 'Insecta', 'Mollusca', 'Arachnida', 'Reptilia', 'Amphibia', 'Mammalia']

    return (
      <View>
        <View style={styles.filterGrid}>
          {fixedAnimalArray.map((iconicName) => (
              <FilterBox props={iconicName} setFilterName={setFilterName}/>
          ))}
        </View>
        <TouchableOpacity onPress={reset}>
          <Text>Clear Filters</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderObservationExploreGrid = () => {
    return (
      <View style={styles.grid}>
        {filterFunc.map((singleItem) => (
            <ObservationExploreCard singleItem={singleItem} />
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
      <View>
        {renderFilterBox()}
      </View>
      <ScrollView>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  filterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }
})
