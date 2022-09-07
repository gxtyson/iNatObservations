import React from "react";
import { StyleSheet, View, ScrollView, Text } from 'react-native'

import ObservationExploreCard from "./ObservationExploreCard";
import FilterBox from "./FilterBox";
import HelperFunc from "../Helpers/api";

const Explore = () => {
  const allData = HelperFunc()

  // console.log('here is all data', allData)
  // allData = an array of objects

  // console.log('here is the filtered taxon', filterOutTaxon)

  const renderObservationExploreGrid = () => {
    return (
      <View>
        {allData.map((singleItem) => (
          <ObservationExploreCard props={singleItem} />
        ))}
      </View>
    )
  }

  const filterOutTaxon = allData.map((taxon) => taxon.taxon).filter(Boolean)
  const iconicArray = filterOutTaxon.map((y) => y.iconic_taxon_name)
  const iconicFilteredArray = [... new Set(iconicArray)]

  // console.log('iconicArray here', iconicFilteredArray)

  const renderFilterBox = () => {
    return (
      <View>
        {iconicFilteredArray.map((iconicName) => (
          <FilterBox props={iconicName} />
        ))}
      </View>
    )
  }

  return (
    <View>
      <View>{renderFilterBox()}</View>
      <ScrollView>{renderObservationExploreGrid()}</ScrollView>
    </View>
  )

}

export default Explore
