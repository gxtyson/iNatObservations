import React from 'react';
import { StyleSheet, View,  ScrollView } from 'react-native';

import ObservationHomeCard from './ObservationHomeCard';
import HelperFunc from '../../Api/api';


const Home = () => {
  const allData = HelperFunc()

  const renderObservationCard = () => {
    return (
      <View>
        {allData.map((singleItem) => (
          <View key={singleItem.id}>
            <ObservationHomeCard props={singleItem} />
          </View>
        ))}
      </View>
    )
  }

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

