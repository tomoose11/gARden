import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { firebase } from '../config';

const logo = require('../js/res/gARden.png');
const backgroundImage = require('../js/res/background.jpg');

export default class Home extends Component {
  state = {};

  logOut = () => {
    const { navigation } = this.props;
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('WelcomeScreen');
      });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={backgroundImage}>
          <View style={styles.darkenImage}>
            <View style={styles.loginContainer}>
              <Image style={styles.logo} source={logo} />
              <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton, styles.buttonColorHeavy]}
                onPress={() => {
                  navigation.navigate('ARScreen');
                }}
                underlayColor="#fff"
              >
                <Text style={styles.buttonText}>Design your garden</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton, styles.buttonColorMedium]}
                onPress={() => {
                  navigation.navigate('WishListScreen');
                }}
                underlayColor="#fff"
              >
                <Text style={styles.buttonText}>See your wish list</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton, styles.buttonColorLight]}
                onPress={this.logOut}
                underlayColor="#fff"
              >
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  darkenImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.256)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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
  loginButton: {
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9
    }
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 320,
    height: 400,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 6
  },
  logo: {
    flex: 1,
    marginBottom: 10,
    width: 250,
    height: 100
  },
  buttonColorHeavy: {
    backgroundColor: 'rgb(190,96,61)'
  },
  buttonColorMedium: {
    backgroundColor: 'rgb(203,122,91)'
  },
  buttonColorLight: {
    backgroundColor: 'rgb(223,142,114)'
  }
});
