import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';
import AR from './screens/AR';
import WishList from './screens/WishList';
import Welcome from './screens/Welcome';
import SignUpComp from './screens/SignUp';
import SignInComp from './screens/SIgnIn';

export default class App extends Component {
  state = {};

  render() {
    return <SwitchNavContainer />;
  }
}

const SwitchNav = createSwitchNavigator({
  WelcomeScreen: Welcome,
  ARScreen: AR,
  HomeScreen: Home,
  WishListScreen: WishList,
  SignUp: SignUpComp,
  SignIn: SignInComp
});

const SwitchNavContainer = createAppContainer(SwitchNav);
