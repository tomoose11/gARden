import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight, Image, ImageBackground
} from 'react-native';
import ShoppingList from '../js/components/ShoppingList';
import Stores from '../js/components/Stores';

const backgroundImage = require('../js/res/background.jpg');
const backButton = require('../js/res/backButton.png');

export default class Home extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={backgroundImage}>
          <View style={styles.loginContainer}>
            <View style={styles.darkenImage}>
              <View style={styles.backView}>
                <TouchableHighlight
                  style={styles.button}
                  onPress={() => navigation.navigate('HomeScreen')}
                  underlayColor="#00000000"
                >
                  <Image style={styles.icon} source={backButton} />
                </TouchableHighlight>
              </View>
              <View style={styles.shoppingListView}>
                <Text style={styles.text}>Your wishlist</Text>
                <ShoppingList />
              </View>
              <View style={styles.storesView}>
                <Stores />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const resizeMode = 'center';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',

    alignItems: 'center'
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 320,
    height: 500,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 6
  },
  text: {
    fontSize: 40
  },
  button: {
    backgroundColor: 'rgba(10,10,10,0)',
    height: 50,
    width: 50
  },
  icon: {
    width: 60,
    height: 60
  },
  backView: {
    flex: 1
  },
  shoppingListView: {
    flex: 4
  },
  storesView: {
    flex: 4
  }
});
