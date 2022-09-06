import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native'

import ObservationExploreCard from "./ObservationExploreCard";
import HelperFunc from "../Helpers/api";

const Explore = () => {
  const allData = HelperFunc()

  const renderObservationGrid = () => {
    return (
      <View>
        {allData.map((singleItem) => (
          <ObservationExploreCard props={singleItem} />
        ))}
      </View>
    )
  }

  return (
    <View>
      <ScrollView>{renderObservationGrid()}</ScrollView>
    </View>
  )

}

export default Explore
