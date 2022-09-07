import React from "react";
import { StyleSheet, View, ScrollView, Text } from 'react-native'

import ObservationExploreCard from "./ObservationExploreCard";
import FilterBox from "./FilterBox";
import HelperFunc from "../Helpers/api";

const Explore = () => {
  const allData = HelperFunc()

  console.log('here is all data', allData)
  // allData = an array of objects

  const renderObservationExploreGrid = () => {
    return (
      <View>
        {allData.map((singleItem) => (
          <ObservationExploreCard props={singleItem} />
        ))}
      </View>
    )
  }
  const renderFilterBox = () => {
    return (
      <View>
        {allData.map((iconicName) => (
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
