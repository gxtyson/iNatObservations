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

  // console.log('before', allData)
  // console.log('after', filterNullTaxonValues)



  // console.log('here is all data', allData)
  // allData = an array of objects

  // console.log('here is the filtered taxon', filterOutTaxon)

  const renderObservationExploreGrid = () => {
    return (
      <View>
        {filterFunc.map((singleItem) => (
          <ObservationExploreCard props={singleItem} />
        ))}
      </View>
    )
  }

  // const filterOutTaxon = allData.map((taxon) => taxon.taxon).filter(Boolean)
  const iconicArray = filterNullTaxonValues.map((y) => y.taxon.iconic_taxon_name)
  const iconicFilteredArray = [... new Set(iconicArray)]


  // console.log('whats this array?', iconicArray)
  // console.log('whats this filtered array?', iconicFilteredArray)

  // console.log('before', allData)
  // console.log('filtered?', filterOutTaxon)
  // console.log('iconicArray here', iconicFilteredArray)

  const [filterName, setFilterName] = useState('')

  const renderFilterBox = () => {
    return (
      <View>
        <TouchableOpacity>
          {iconicFilteredArray.map((iconicName) => (
            <FilterBox props={iconicName} setFilterName={setFilterName}/>
          ))}

        </TouchableOpacity>
      </View>
    )
  }
  console.log('filtername here', filterName)

  const filterFunc = filterNullTaxonValues.filter(function(icon) {
    return icon.taxon.iconic_taxon_name === filterName
  })

  console.log('hopefully this works',filterFunc)

  return (
    <View>
      <View>{renderFilterBox()}</View>
      <ScrollView>{renderObservationExploreGrid()}</ScrollView>
    </View>
  )

}

export default Explore
