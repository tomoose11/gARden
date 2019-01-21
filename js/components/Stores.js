import React, { Component } from 'react';
import {
  View, FlatList, Text, StyleSheet, navigator
} from 'react-native';
import api from '../api';
import StoreCard from './StoreCard';

class Stores extends Component {
  state = {
    stores: []
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        api.getStores(coords).then((stores) => {
          this.setState({ stores });
        });
      },
      () => {}
    );
  };

  render() {
    const { stores } = this.state;
    return (
      <View>
        <Text style={styles.storesNearYou}>Plant stores close to you:</Text>
        {stores.length > 0 && (
          <FlatList
            data={stores}
            renderItem={({ item }) => <StoreCard storeInfo={item} />}
            keyExtractor={item => item.title}
          />

        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  storesNearYou: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default Stores;
