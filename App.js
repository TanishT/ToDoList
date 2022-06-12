import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import AppHeader from './components/AppHeader';

import {View,Text,Button,StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
          return(

      <BottomTabNavigator/>

    );
    //return <BottomTabNavigator>;
    //<BottomTabNavigator />;
    //return <BottomTabNavigator> <BottomTabNavigator />;
  }
}
