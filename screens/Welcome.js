import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image
} from 'react-native';
// import { Font } from 'expo';
import { withNavigationFocus } from 'react-navigation';

const logo = require('../js/res/gARden.png');

const backgroundImage = require('../js/res/background.jpg');

class Login extends Component {
  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={backgroundImage}>
          <View style={styles.darkenImage}>
            <View style={styles.loginContainer}>
              <Image style={styles.logo} source={logo} />

              <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonContainer, styles.buttonColor]}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={styles.loginText}>Sign up</Text>
              </TouchableOpacity>
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
  darkenImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.256)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 320,
    height: 300,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 6
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: 'white',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
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

  loginButton: {
    backgroundColor: 'rgb(190,96,61)',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19
  },
  loginText: {
    color: 'white',
    fontSize: 18
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
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  buttonColor: {
    backgroundColor: 'rgb(203,122,91)'
  },
  logo: {
    flex: 1,
    marginBottom: 10,
    width: 200,
    height: 100
  }
});

export default withNavigationFocus(Login);
