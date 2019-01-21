import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreCard = ({ storeInfo }) => (
  <View>
    <View style={styles.storeCardContainer}>
      <Text style={styles.title}>{storeInfo.title}</Text>
      <Text>{`${storeInfo.distance} metres from you`}</Text>
      <Text>{storeInfo.vicinity.replace(/(<([^>]+)>)/gi, ', ')}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  storeCardContainer: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginTop: 5,
    borderRadius: 3,
    padding: 1
  },
  title: {
    fontWeight: 'bold'
  }
});

export default StoreCard;
