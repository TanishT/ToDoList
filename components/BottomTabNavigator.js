import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from './AppHeader';
import List from "../screens/List";
import createList from "../screens/createList";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
        
          <Tab.Screen name="ToDoList" component={List} />
          <Tab.Screen name="Create Your To Do list" component={createList} />
        
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  }
})