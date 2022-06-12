import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import firebase from 'firebase';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      light_theme: true,
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  }
});
