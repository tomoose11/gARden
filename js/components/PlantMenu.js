/* eslint no-nested-ternary: 0 */

import React, { Component } from 'react';
import {
  View, StyleSheet, FlatList, Image, ImageBackground, Alert
} from 'react-native';
import FadeInView from './FadeInView';
import InfoCard from './InfoCard';

import PlantCard from './PlantCard';
import api from '../api';

const wateringCanGif = require('../res/wateringCanGif.gif');
const backgroundImage = require('../res/background.jpg');

class PlantMenu extends Component {
  state = {
    data: [],
    info: null,
    isMenuLoading: false,
    iconUrl: null
  };

  componentDidMount = () => {
    this.makeIsMenuLoadingTrue();
    this.fetchMenuItems();
  };

  fetchMenuItems = () => {
    api.getMenuItems().then((doc) => {
      if (doc.exists) {
        const { menuArray } = doc.data();
        this.setState({ data: menuArray }, () => {
          this.makeIsMenuLoadingFalse();
        });
      } else {
        Alert.alert('Alert', 'File request unsucessful');
      }
    });
  };

  toggleInfoPage = (plantName, icon) => {
    this.setState({ info: plantName, iconUrl: icon });
  };

  makeIsMenuLoadingTrue = () => {
    const { isMenuLoading } = this.state;
    if (isMenuLoading !== true) {
      this.setState({
        isMenuLoading: true
      });
    }
  };

  makeIsMenuLoadingFalse = () => {
    const { isMenuLoading } = this.state;
    if (isMenuLoading !== false) {
      this.setState({
        isMenuLoading: false
      });
    }
  };

  render() {
    const { addPlantToRenderList } = this.props;
    const {
      data, info, isMenuLoading, iconUrl
    } = this.state;
    return (
      <View style={styles.menu}>
        <FadeInView style={styles.plantMenuBackgorund}>
          <ImageBackground style={styles.bgImage} source={backgroundImage}>
            <View style={styles.darkenImage}>
              {isMenuLoading ? (
                <View style={styles.loadingScreen}>
                  <Image source={wateringCanGif} style={styles.loadingImg} />
                </View>
              ) : !info ? (
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <PlantCard
                      plantName={item.name}
                      icon={item.icon}
                      toggleInfoPage={this.toggleInfoPage}
                      addPlantToRenderList={addPlantToRenderList}
                    />
                  )}
                  keyExtractor={item => item.name}
                />
              ) : (
                <InfoCard plantName={info} toggleInfoPage={this.toggleInfoPage} icon={iconUrl} />
              )}
            </View>
          </ImageBackground>
        </FadeInView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'transparent',
    width: 200,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    right: -100,
    height: '100%'
  },
  loadingScreen: {
    backgroundColor: 'rgba(150,150,150,0.5)',
    flex: 1,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingImg: {
    height: 70,
    width: 100
  },
  plantMenuBackgorund: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,

    backgroundColor: 'white'
  },
  bgImage: {
    flex: 1,
    resizeMode: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  darkenImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.256)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderLeftColor: 'white'
  }
});

export default PlantMenu;
