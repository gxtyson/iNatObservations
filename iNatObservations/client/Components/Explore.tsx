import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import ObservationExploreCard from "./ObservationExploreCard";
import FilterBox from "./FilterBox";
import HelperFunc from "../Helpers/api";

const Explore = () => {
  const allData = HelperFunc()

  const filterNullTaxonValues = allData.filter(function(taxon) {
    return taxon.taxon !== null
  })


  const renderObservationExploreGrid = () => {
    return (
      <View>
        {filterFunc.map((singleItem) => (
          <ObservationExploreCard props={singleItem} />
        ))}
      </View>
    )
  }

  const iconicArray = filterNullTaxonValues.map((y) => y.taxon.iconic_taxon_name)
  const iconicFilteredArray = [... new Set(iconicArray)]


  const [filterName, setFilterName] = useState('')

  const renderFilterBox = () => {
    const reset = () => {
      setFilterName('')
    }

    return (
      <View>
        <TouchableOpacity>
          {iconicFilteredArray.map((iconicName) => (
            <FilterBox props={iconicName} setFilterName={setFilterName}/>
          ))}

        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text>Clear Filters</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const filterFunc = filterNullTaxonValues.filter(function(icon) {
    if (filterName === '') {
      return filterNullTaxonValues
    } else {
      return icon.taxon.iconic_taxon_name === filterName
    }
  })


  return (
    <View>
      <View>{renderFilterBox()}</View>
      <ScrollView>{renderObservationExploreGrid()}</ScrollView>
    </View>
  )

}

export default Explore
